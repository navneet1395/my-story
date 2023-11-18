import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
const Loading = () => {
  const router = useRouter();
  useEffect(() => {
    const loadingSteps = document.querySelectorAll(".loading-step");
    console.log(loadingSteps);
    const lastStep = loadingSteps.length - 1;

    loadingSteps.forEach((step, index) => {
      step.style.animationDelay = `${index * 1}s`;
      step.classList.add("fill-color-animation");
    });

    setTimeout(() => {
      router.push("/home"); // Replace with the desired URL of the home page
    }, 12000);
  }, []);
  const welcomeMessages = [
  
    {
      languageName: "Hindi",
      message: "नमस्ते",
      alternateEnglishText: "Namaste",
    },
    { languageName: "Punjabi", message: "Sata Sri A kal" },
    { languageName: "Bangla", message: "Nomoshkar" },
    {
      languageName: "Kashmiri",
      message: "आदाब",
      alternateEnglishText: "Aadab",
    },
    { languageName: "Magadhi", message: "Parnam" },
    { languageName: "Marathi", message: "Namaskar" },
    { languageName: "Tamil", message: "Vanakkam" },
    { languageName: "Telegu", message: "Namaskaram" },
    { languageName: "Dari", message: "Salâm" }, 
     { languageName: "French", message: "Bienvenue" },
    { languageName: "Italian", message: "Benvenuto/a" },
    { languageName: "Portuguese", message: "Bem-vindo/a" },
    { languageName: "Swedish", message: "Välkommen" },
    { languageName: "Dholuo", message: "Ajolo in" },
    { languageName: "Kannada", message: "ಸ್ವಾಗತಾರ್ಹ" },
    { languageName: "Japanese", message: "ようこそ" },
    { languageName: "Kimeru", message: "igua wamukiri mono" },
    { languageName: "Hausa", message: "maraba" },
    { languageName: "Kinyarwanda", message: "Ikaze" },
    { languageName: "Chichewa", message: "takulandirani" },
    {
      languageName: "Punjabi",
      message: "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
      alternateEnglishText: "Sata Sri Akal",
    },
    {
      languageName: "Bangla",
      message: "নমস্কার",
      alternateEnglishText: "Nomoshkar",
    },
    {
      languageName: "Magadhi",
      message: "प्रणाम",
      alternateEnglishText: "Parnam",
    },
    {
      languageName: "Marathi",
      message: "नमस्कार",
      alternateEnglishText: "Namaskar",
    },
    {
      languageName: "Tamil ",
      message: "வணக்கம்",
      alternateEnglishText: "Vanakkam ",
    },
    {
      languageName: "Telegu",
      message: "నమస్కరం",
      alternateEnglishText: "Namaskaram ",
    },
    {
      languageName: "BrajBhasha",
      message: "राधे राधे",
      alternateEnglishText: "Radhe Radhe ",
    },
  ];
  const [welcomeIndex, setWelcomeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {" "}
      <div className="d-flex-cc">
        {/* <span class="loader2"></span> */}
        <h1 className={styles.title}>
          <span className={styles.fadeIn}>
            {welcomeMessages[welcomeIndex].message}
          </span>
        </h1>
        <div
          style={{
            border: "2px solid #3E3A38",
            height: "40px",
            width: "50vw",
            padding: "0.25rem",
          }}
        >
          <div
            style={{
              margin: "0",
              padding: "0",
              overflow: "hidden",
              display: "flex",
              gap: "2px",
              width: "100%",
              height: "100%",
            }}
            className="loading-container"
          >
            <div className="loading-step" />
            <div className="loading-step" /> <div className="loading-step" />
            <div className="loading-step" /> <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
            <div className="loading-step" />
          </div>
          {/* <div style={{ margin: "1rem", textAlign: "center" }}>
            <b>Thanks for visiting.</b>
            <br />
            Navneet will be here in a second
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Loading;