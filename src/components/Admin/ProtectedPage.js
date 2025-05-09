import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProtectedPage.css";

const ProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const correctPassword = "admin@2024#2D#@D2d"; // Defina sua senha secreta aqui
  const navigate = useNavigate();
  const setAuthenticated = () => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("isAdmin", "true"); // define como admin
    setIsAuthenticated(true);
  };
  
  const handleAccess = () => {
    if (password === correctPassword) {
      setAuthenticated(); // Define a autenticação como verdadeira
      navigate("/admin/users");
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="protected-page-container">
      <h1>Acesso Protegido</h1>
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAccess}>Acessar</button>
    </div>
  );
};

export default ProtectedPage;
