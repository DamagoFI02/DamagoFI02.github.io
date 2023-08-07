
import React from 'react';

const StartGo = () => {
  const handleButtonClick = async () => {
    try {
      const url = 'http://192.168.0.45:8080/start_motor';
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });

      if (response.ok) {
        // Füge hier den Code hinzu, der nach erfolgreicher GET-Anfrage ausgeführt werden soll
        console.log('Motor gestartet:', response.data);
      } else {
        console.error('Fehler beim Starten des Motors:', response.status);
      }
    } catch (error) {
      console.error('Fehler bei der GET-Anfrage:', error);
    }
  };

  return (
    <div>
      <h1>Motorkontrolle</h1>
      <button onClick={handleButtonClick}>Motor starten</button>
    </div>
  );
};
export default StartGo;
