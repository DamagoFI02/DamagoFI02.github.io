import React from 'react';
import axios from 'axios'; // Falls du Axios verwenden möchtest

const MyButton = () => {
  const handleClick = async () => {
    try {
      // Hier kannst du entweder die Fetch API verwenden oder Axios
      // Mit Fetch API:
      const response = await fetch('http://10.2.50.186:8181/forward', { method: 'GET' });
      if (response.ok) {
        console.log('GET-Anfrage erfolgreich!');
        // Füge hier den Code hinzu, der nach erfolgreicher GET-Anfrage ausgeführt werden soll.
      } else {
        console.error('GET-Anfrage fehlgeschlagen!');
      }

      // Mit Axios:
      // const response = await axios.get('http://10.2.50.186:8181/forward');
      // console.log('GET-Anfrage erfolgreich!', response.data);
    } catch (error) {
      console.error('Fehler bei der GET-Anfrage:', error);
    }
  };

  return (
    <button onClick={handleClick}>GET ausführen</button>
  );
};

export default MyButton;
