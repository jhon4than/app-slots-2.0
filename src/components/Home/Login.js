import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import "./Login.css";
import LogoMain from "../../assets/logoHome-remo.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

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
const auth = getAuth(app); // Obtenha a instância de autenticação

function Login() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const getUserByEmailAndWhatsapp = async (email, whatsapp) => {
    try {
      const usersCollection = collection(db, "mrodrig");
      const q = query(
        usersCollection,
        where("desc", "==", email),
        where("name", "==", whatsapp)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Suponha que você queira retornar os dados do primeiro documento encontrado
        const doc = querySnapshot.docs[0];
        const userData = doc.data();
        console.log("Dados do usuário:", userData);
        return userData;
      } else {
        console.log("Nenhum usuário encontrado com os valores especificados.");
        return null; // Retorne null se nenhum usuário for encontrado
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error; // Rejeite a promessa se ocorrer um erro
    }
  };

  const handleLogin = async () => {
    if (!email) {
      setErrorMessage("Por favor, insira um usuário.");
      return;
    }
    if (!whatsapp) {
      setErrorMessage("Por favor, insira um Password.");
      return;
    }
    setIsLoggingIn(true);

    try {
      const userData = await getUserByEmailAndWhatsapp(email, whatsapp);
      console.log(userData);
      console.log(email);
      console.log(whatsapp);
      if (!userData || !email || !whatsapp) {
        setErrorMessage("Os dados inseridos estão incorretos.");
        setIsLoggingIn(false);
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userWhatsapp", whatsapp);

      // A autenticação Firebase pode ser feita aqui se necessário
      // await signInWithEmailAndPassword(auth, email, whatsapp);

      navigate("/");
    } catch (error) {
      console.error("Erro ao verificar usuário: ", error);

      setIsLoggingIn(false);
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="login-page">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#8a2be2",
            },
            links: {
              color: "#8a2be2",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="login-container">
        <img src={LogoMain} className="login-logo" alt="Logo" />
        <p className="app-description animated-text">
          O APLICATIVO QUE HACKEIA JOGOS EM TEMPO REAL.
        </p>
        <p className="app-descriptions animated-text">Cadastro</p>
        <div className="login-form">
          <input
            type="text"
            placeholder="Digite seu Usuário"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            className="login-input"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <button
            className={`login-button ${isLoggingIn ? "loading" : ""}`}
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Carregando..." : "Entrar"}
          </button>
          {errorMessage && <p className="login-error">{errorMessage}</p>}
          <p className="login-support white-text">
            Não consegue logar? Adquira já sua licença{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
