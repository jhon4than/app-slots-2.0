import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Platforms.css";

const Platforms = () => {
  const [form, setForm] = useState({ nome: "", link: "", imagem: "" });
  const [platforms, setPlatforms] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const { nome, link, imagem } = form;
    if (nome && link && imagem) {
      await addDoc(collection(db, "plataformas"), {
        nome,
        link,
        imagem,
        timestamp: Date.now(),
      });
      setForm({ nome: "", link: "", imagem: "" });
      fetchData();
    } else {
      alert("Preencha todos os campos");
    }
  };

  const deletePlatform = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta plataforma?")) {
      try {
        await deleteDoc(doc(db, "plataformas", id));
        fetchData();
      } catch (error) {
        console.error("Erro ao excluir plataforma:", error);
        alert("Erro ao excluir plataforma.");
      }
    }
  };

  const fetchData = async () => {
    const q = query(collection(db, "plataformas"), orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPlatforms(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="platforms-container">
      <h1>Gerenciar Plataformas</h1>
      <div className="platform-form">
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          name="link"
          placeholder="Link"
          value={form.link}
          onChange={handleChange}
        />
        <input
          name="imagem"
          placeholder="URL da Imagem"
          value={form.imagem}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Adicionar Plataforma</button>
      </div>

      <div className="platforms-grid">
        {platforms.map((p) => (
          <div key={p.id} className="platform-card">
            <img src={p.imagem} alt={p.nome} />
            <p><strong>{p.nome}</strong></p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">Acessar</a>
            <button onClick={() => deletePlatform(p.id)} className="delete-button">Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
