import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import ReactPaginate from "react-paginate";
import "./Users.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfaNmtgyo1VgqVFIHJ8vq-dekSJyjjk9c",
  authDomain: "login-app-a4816.firebaseapp.com",
  projectId: "login-app-a4816",
  storageBucket: "login-app-a4816.appspot.com",
  messagingSenderId: "653367042131",
  appId: "1:653367042131:web:95be958a59dde1477c26a6",
  measurementId: "G-J0SB1FB8LS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [itemsPerPage] = useState(10);
  const [addUserForm, setAddUserForm] = useState({
    email: "",
    whatsapp: "",
  });

  const saveUser = async (email, whatsapp) => {
    try {
      const timestamp = new Date();
      const docRef = await addDoc(collection(db, "vinny"), {
        desc: email,
        name: whatsapp,
        timestamp: timestamp.getTime(),
      });
      console.log("Documento escrito com ID: ", docRef.id); // Obtenha o ID gerado
    } catch (error) {
      console.error("Erro ao adicionar documento: ", error);
      setErrorMessage("Erro ao salvar os dados.");
    }
  };

  const editUser = async (id, newEmail, newWhatsapp) => {
    try {
      const userRef = doc(db, "vinny", id);
      await updateDoc(userRef, {
        desc: newEmail,
        name: newWhatsapp,
      });
      alert("Usuário editado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao editar usuário: ", error);
      setErrorMessage("Erro ao editar os dados.");
    }
  };

  const deleteUser = async (id) => {
    if (id) {
      if (window.confirm("Tem certeza de que deseja excluir este usuário?")) {
        try {
          const userRef = doc(db, "vinny", id);
          await deleteDoc(userRef);
          alert("Usuário excluído com sucesso!");
          window.location.reload();
        } catch (error) {
          console.error("Erro ao excluir usuário: ", error);
          setErrorMessage("Erro ao excluir os dados.");
        }
      }
    } else {
      console.error("ID do usuário indefinido ou inválido.");
      setErrorMessage("Erro ao excluir o usuário: ID indefinido ou inválido.");
    }
  };

  const deleteAllUsers = async () => {
    if (
      window.confirm("Tem certeza de que deseja excluir todos os usuários?")
    ) {
      try {
        const userCollectionRef = collection(db, "vinny");
        const querySnapshot = await getDocs(userCollectionRef);
        const batch = [];
        querySnapshot.forEach((doc) => {
          batch.push(deleteDoc(doc.ref));
        });
        await Promise.all(batch);
        alert("Todos os usuários foram excluídos com sucesso!");
        window.location.reload();
      } catch (error) {
        console.error("Erro ao excluir todos os usuários: ", error);
        setErrorMessage("Erro ao excluir todos os dados.");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "vinny"), orderBy("timestamp", "desc"))
        );
        const userDataArray = [];
        querySnapshot.forEach((doc) => {
          userDataArray.push({
            id: doc.id, // Inclua o ID no objeto de usuário
            ...doc.data(),
          });
        });
        setUserData(userDataArray);
        setFilteredData(userDataArray);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, [db]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = () => {
    const newFilteredData = userData.filter((user) => {
      if (!searchTerm) {
        return true;
      }
      return (
        (user.desc &&
          user.desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.name &&
          user.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    setFilteredData(newFilteredData);
    setCurrentPage(0);
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const paginatedData = filteredData.slice(offset, offset + itemsPerPage);

  const exportToCSV = () => {
    const csvData = userData
      .map((user) => `${user.desc},${user.name}`)
      .join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "usuarios.csv");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddUserForm({
      ...addUserForm,
      [name]: value,
    });
  };

  const handleAddUser = async () => {
    const { email, whatsapp } = addUserForm;
    if (email && whatsapp) {
      await saveUser(email, whatsapp);
      alert("Usuário adicionado com sucesso!");
      setAddUserForm({
        email: "",
        whatsapp: "",
      });
      window.location.reload(); // Recarrega a página após a adição
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="admin-container">
      <h1>Lista de Usuários</h1>
      <div className="admin-actions">
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Usuário"
            name="email"
            value={addUserForm.email}
            onChange={handleInputChange}
            className="add-input"
          />
          <input
            type="text"
            placeholder="Password"
            name="whatsapp"
            value={addUserForm.whatsapp}
            onChange={handleInputChange}
            className="add-input"
          />
          <button className="add-button" onClick={handleAddUser}>
            Adicionar Usuário
          </button>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
        <button className="export-button" onClick={exportToCSV}>
          Exportar para CSV
        </button>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Password</th>
            <th>Ações</th> {/* Coluna para botões de ação */}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user, index) => (
            <tr key={index}>
              <td>{user.desc}</td>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => {
                    const newEmail = prompt("Novo usuário:", user.desc);
                    const newWhatsapp = prompt("Nova senha:", user.name);
                    if (newEmail !== null && newWhatsapp !== null) {
                      editUser(user.id, newEmail, newWhatsapp);
                    }
                  }}
                >
                  Editar
                </button>
                <button
                  className="delete-all"
                  onClick={() => deleteUser(user.id)} // Passe o ID para deleteUser
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próxima"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <button className="delete-all" onClick={deleteAllUsers}>
        Apagar Todos
      </button>
    </div>
  );
};

export default Users;
