import React, { useState, useEffect } from "react";
import "./Home.css"; // Importar o CSS correspondente
import LogoMain from "../../assets/logoHome-remo.png";
import fundo from "../../assets/imageHome.jpg";
// import videoSrc from "../../assets/VideoCasaCompleto.mp4";
import Carousel from "./Carousel";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import downloadIcon from "../../assets/botao-de-download.png";
import TutorialModal from "./TurotialModal";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
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
const auth = getAuth(app); // Obtenha a instância de autenticação

function Home() {
  const carouselItems = [
    {
      name: "Andrea",
      amount: "+R$296.10",
      game: "Fortune Tiger",
    },
    {
      name: "Gustavo",
      amount: "+R$360.48",
      game: "Fortune Mouse",
    },
    {
      name: "Rodrigo",
      amount: "+R$197.99",
      game: "Fortune Ox",
    },
    {
      name: "Bianca",
      amount: "+R$131.05",
      game: "Fortune Ox",
    },
    {
      name: "Larissa",
      amount: "+R$440.71",
      game: "Fortune Mouse",
    },
    {
      name: "Beatriz",
      amount: "+R$216.22",
      game: "Fortune Tiger",
    },
    {
      name: "Antero",
      amount: "+R$177.77",
      game: "Fortune Tiger",
    },
    {
      name: "Matheus",
      amount: "+R$502.51",
      game: "Fortune Tiger",
    },
    {
      name: "Gustavo",
      amount: "+R$414.43",
      game: "Fortune Ox",
    },
    {
      name: "Julia",
      amount: "+R$334.58",
      game: "Fortune Tiger",
    },
    {
      name: "Natalia",
      amount: "+R$111.33",
      game: "Fortune Ox",
    },
    {
      name: "Pedro",
      amount: "+R$187.75",
      game: "Fortune Tiger",
    },
    {
      name: "Valentina",
      amount: "+R$298.88",
      game: "Fortune Ox",
    },
    {
      name: "Fernando",
      amount: "+R$370.26",
      game: "Fortune Tiger",
    },
    {
      name: "Valeria",
      amount: "+R$491.63",
      game: "Fortune Ox",
    },
    {
      name: "Samuel",
      amount: "+R$404.82",
      game: "Fortune Ox",
    },
    {
      name: "Andrea",
      amount: "+R$336.50",
      game: "Fortune Tiger",
    },
    {
      name: "Clara",
      amount: "+R$311.14",
      game: "Fortune Tiger",
    },
    {
      name: "Rafaela",
      amount: "+R$597.56",
      game: "Fortune Mouse",
    },
    {
      name: "João",
      amount: "+R$332.90",
      game: "Fortune Rabbit",
    },
    {
      name: "Camila",
      amount: "+R$569.18",
      game: "Fortune Mouse",
    },
    {
      name: "Sophia",
      amount: "+R$494.54",
      game: "Fortune Rabbit",
    },
    {
      name: "Helena",
      amount: "+R$101.57",
      game: "Fortune Mouse",
    },
    {
      name: "Pedro",
      amount: "+R$411.25",
      game: "Fortune Rabbit",
    },
    {
      name: "Laura",
      amount: "+R$556.38",
      game: "Fortune Tiger",
    },
    {
      name: "Tiago",
      amount: "+R$131.60",
      game: "Fortune Mouse",
    },
    {
      name: "Beatriz",
      amount: "+R$386.05",
      game: "Fortune Tiger",
    },
    {
      name: "Sophia",
      amount: "+R$464.27",
      game: "Fortune Mouse",
    },
    {
      name: "Alexandre",
      amount: "+R$324.08",
      game: "Fortune Rabbit",
    },
    {
      name: "Carlos",
      amount: "+R$143.24",
      game: "Fortune Mouse",
    },
    {
      name: "Gustavo",
      amount: "+R$492.80",
      game: "Fortune Rabbit",
    },
    {
      name: "Maria",
      amount: "+R$423.01",
      game: "Fortune Tiger",
    },
    {
      name: "Amanda",
      amount: "+R$208.97",
      game: "Fortune Rabbit",
    },
    {
      name: "Helena",
      amount: "+R$193.66",
      game: "Fortune Tiger",
    },
    {
      name: "Daniel",
      amount: "+R$591.38",
      game: "Fortune Tiger",
    },
    {
      name: "Luis",
      amount: "+R$273.28",
      game: "Fortune Tiger",
    },
    {
      name: "Natalia",
      amount: "+R$329.87",
      game: "Fortune Tiger",
    },
    {
      name: "Rafaela",
      amount: "+R$165.60",
      game: "Fortune Rabbit",
    },
    {
      name: "Camila",
      amount: "+R$317.10",
      game: "Fortune Tiger",
    },
    {
      name: "João",
      amount: "+R$494.26",
      game: "Fortune Rabbit",
    },
    {
      name: "Valentina",
      amount: "+R$559.94",
      game: "Fortune Tiger",
    },
    {
      name: "Alice",
      amount: "+R$193.18",
      game: "Fortune Tiger",
    },
    {
      name: "Sophia",
      amount: "+R$465.25",
      game: "Fortune Ox",
    },
    {
      name: "Joaquim",
      amount: "+R$587.43",
      game: "Fortune Tiger",
    },
    {
      name: "Gustavo",
      amount: "+R$165.78",
      game: "Fortune Ox",
    },
    {
      name: "Luis",
      amount: "+R$433.95",
      game: "Fortune Tiger",
    },
    {
      name: "Laura",
      amount: "+R$557.48",
      game: "Fortune Ox",
    },
    {
      name: "Mariana",
      amount: "+R$518.23",
      game: "Fortune Mouse",
    },
    {
      name: "Manuel",
      amount: "+R$498.41",
      game: "Fortune Tiger",
    },
    {
      name: "Isabella",
      amount: "+R$410.06",
      game: "Fortune Ox",
    },
    {
      name: "Rodrigo",
      amount: "+R$168.02",
      game: "Fortune Tiger",
    },
    {
      name: "Camila",
      amount: "+R$135.46",
      game: "Fortune Tiger",
    },
    {
      name: "Isabel",
      amount: "+R$224.09",
      game: "Fortune Tiger",
    },
    {
      name: "Leticia",
      amount: "+R$123.81",
      game: "Fortune Ox",
    },
    {
      name: "João",
      amount: "+R$138.28",
      game: "Fortune Tiger",
    },
    {
      name: "Leonardo",
      amount: "+R$238.84",
      game: "Fortune Mouse",
    },
    {
      name: "Eduardo",
      amount: "+R$516.05",
      game: "Fortune Tiger",
    },
    {
      name: "Eduardo",
      amount: "+R$253.36",
      game: "Fortune Tiger",
    },
    {
      name: "Marcos",
      amount: "+R$497.60",
      game: "Fortune Mouse",
    },
    {
      name: "Lara",
      amount: "+R$506.72",
      game: "Fortune Mouse",
    },
    {
      name: "Marcos",
      amount: "+R$578.58",
      game: "Fortune Tiger",
    },
    {
      name: "Amanda",
      amount: "+R$219.04",
      game: "Fortune Tiger",
    },
    {
      name: "Isabel",
      amount: "+R$217.84",
      game: "Fortune Mouse",
    },
    {
      name: "Rafael",
      amount: "+R$255.35",
      game: "Fortune Tiger",
    },
    {
      name: "Isabella",
      amount: "+R$106.93",
      game: "Fortune Mouse",
    },
    {
      name: "Marcos",
      amount: "+R$431.38",
      game: "Fortune Ox",
    },
    {
      name: "Antero",
      amount: "+R$451.37",
      game: "Fortune Tiger",
    },
    {
      name: "Rodrigo",
      amount: "+R$354.80",
      game: "Fortune Tiger",
    },
    {
      name: "Sophia",
      amount: "+R$568.14",
      game: "Fortune Tiger",
    },
    {
      name: "Isabella",
      amount: "+R$115.70",
      game: "Fortune Mouse",
    },
    {
      name: "Alexandre",
      amount: "+R$366.11",
      game: "Fortune Tiger",
    },
    {
      name: "Clara",
      amount: "+R$276.09",
      game: "Fortune Mouse",
    },
    {
      name: "Helena",
      amount: "+R$338.36",
      game: "Fortune Ox",
    },
    {
      name: "Felipe",
      amount: "+R$151.68",
      game: "Fortune Mouse",
    },
    {
      name: "Camila",
      amount: "+R$564.92",
      game: "Fortune Tiger",
    },
    {
      name: "Gabriela",
      amount: "+R$295.28",
      game: "Fortune Mouse",
    },
    {
      name: "Luiz",
      amount: "+R$424.60",
      game: "Fortune Mouse",
    },
    {
      name: "Ricardo",
      amount: "+R$305.63",
      game: "Fortune Mouse",
    },
    {
      name: "Isabella",
      amount: "+R$196.84",
      game: "Fortune Tiger",
    },
    {
      name: "Matheus",
      amount: "+R$485.92",
      game: "Fortune Tiger",
    },
    {
      name: "Felipe",
      amount: "+R$503.17",
      game: "Fortune Mouse",
    },
    {
      name: "Julia",
      amount: "+R$348.37",
      game: "Fortune Tiger",
    },
    {
      name: "Alexandre",
      amount: "+R$336.47",
      game: "Fortune Mouse",
    },
  ];
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  const [platform, setPlatform] = useState(null);
  const navigate = useNavigate(); // Hook para navegar entre as rotas

  const openTutorial = (platform) => {
    setTutorialOpen(true);
    setPlatform(platform);
  };

  const closeTutorial = () => {
    setTutorialOpen(false);
    setPlatform(null);
  };

  useEffect(() => {
    const verifyUser = async () => {
      const email = localStorage.getItem("userEmail");
      const whatsapp = localStorage.getItem("userWhatsapp");
  
     
  
      // Verifica se o email e o whatsapp estão armazenados no localStorage
      if (email && whatsapp) {
        try {
          const usersCollection = collection(db, "mrodrig");
       
  
          const q = query(
            usersCollection,
            where("desc", "==", email), // Certifique-se de que 'desc' é o campo correto para email
            where("name", "==", whatsapp) // E 'name' é o campo correto para whatsapp
          );
  
    
          const querySnapshot = await getDocs(q);
  
          if (querySnapshot.empty) {
    
            // Nenhum usuário encontrado, limpe o localStorage e redirecione
            localStorage.clear();
       
            navigate("/"); // Redireciona para a tela inicial, ajuste a rota conforme necessário
         
          } else {
            // Usuário encontrado, extraindo dados
            const doc = querySnapshot.docs[0];
            const userData = doc.data();
         
          }
        } catch (error) {
          console.error("Erro ao verificar usuário:", error);
          // Em caso de erro, também limpe o localStorage e redirecione
          localStorage.clear();
          console.log("localStorage limpo devido a erro");
          navigate("/");
          console.log("Redirecionando para a tela inicial devido a erro");
        }
      } else {
       
        // Email ou Whatsapp não encontrados no localStorage, limpe e redirecione
        localStorage.clear();
        navigate("/");
      }
    };
  
    verifyUser();
  }, [navigate]);
  

  return (
    <div className="background">
      <div className="scrollContainer">
        <div className="container">
          {/* Carousel: Image slider that may contain various items like promotions or features */}
          <Carousel items={carouselItems} />

          {/* Logo: Branding image at the top of the page */}
          <img src={LogoMain} className="centerImage" alt="Logo" />

          {/* Download Section: Prompts users to download the app with respective store buttons */}
          <div className="app-download-section">
            <div className="install-prompt">
              {/* Download Icon: Visual cue to download */}
              <img
                src={downloadIcon}
                alt="Download"
                className="download-icon"
              />
              {/* Prompt Text: Call to action for app installation */}
              <span>Instale nosso app:</span>
            </div>
            {/* When the user clicks on the button, the tutorial modal opens */}
            <div className="download-buttons">
              <button
                onClick={() => openTutorial("android")}
                className="download-button google-play"
              >
                <img src={android} alt="Android" /> Android
              </button>
              <button
                onClick={() => openTutorial("ios")}
                className="download-button app-store"
              >
                <img src={apple} alt="IOS" /> IOS
              </button>
            </div>
          </div>

          {/* Welcome Section: Greets the user and introduces the app */}
          <div className="textContainer">
            {/* Main Greeting */}
            <h1 className="welcomeText">Bem Vindo ao APP SLOT 2.0</h1>
            {/* Description: Additional information about the app */}
            <p className="descriptionText">
              O seu melhor aplicativo de sinais da atualidade!
            </p>
            {/* Video Prompt: Directs users to watch the tutorial video */}
            <p className="videoPrompt">▼ Assista o vídeo tutorial abaixo ▼</p>
          </div>

          <iframe
            width="560"
            height="315"
            className="video"
            src="https://www.youtube.com/embed/JnOvjP6Cx-w"
            frameborder="0"
            allowfullscreen
          ></iframe>

          {/* Tutorial Modal */}
          <TutorialModal
            isOpen={isTutorialOpen}
            onClose={closeTutorial}
            platform={platform}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
