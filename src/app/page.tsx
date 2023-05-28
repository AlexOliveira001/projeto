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
    const windowHeight = window.innerHeight;
    const newButtonPosition = {
      top: Math.random() * (windowHeight - 300) + 'px',
      left: Math.random() * 10 * (5) + 'px',
      right: Math.random() * 10 * (5) + 'px',
      bottom: Math.random() * (windowHeight - 100) + 'px',
    };
    setButtonPosition(newButtonPosition);
  };

  const handleYesButtonClick = () => {
    alert("Tenha um ótimo domingo, que ele seja magnífico e que você transborda a todas com sua alegria 🤍")
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Quer ler a mensagem?</h1>
        <div>
          <button onClick={handleYesButtonClick}>SIM</button>
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
