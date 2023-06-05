"use client"
import styles from './page.module.css'
import React, { useState } from 'react';

export default function Home() {

  const [buttonPosition, setButtonPosition] = useState({
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
  });

  const handleNoButtonClick = () => {
   // const windowHeight = window.innerHeight;
    //const newButtonPosition = {
     // top: Math.random() * (windowHeight - 300) + 'px',
      //left: Math.random() * 10 * (5) + 'px',
     // right: Math.random() * 10 * (5) + 'px',
     // bottom: Math.random() * (windowHeight - 100) + 'px',
   // };
    //setButtonPosition(newButtonPosition);
    window.close(); // Fecha a janela do navegador
  };

  const handleYesButtonClick = () => {
    alert("Que sua semana seja abençoada por Deus e que você nunca desiste de almejar seus objetivos! ❤️ ")
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Ir PRO Site?</h1>
        <div>
        <a href="https://www.youtube.com/watch?v=K-a8s8OLBSE" target="_blank">SIM</a>
          <button
            className={`${styles.button} ${styles.noButton}`}
            onClick={handleNoButtonClick}
            style={buttonPosition}
          >NÃO</button>
        </div>
      </div>
    </main>
  )
}
