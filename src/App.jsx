import { useState } from 'react'
import CryptoJS from 'crypto-js'
import './App.css'

function App() {
  const [texto, setTexto] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const cifrar = () => {
    const resultado = CryptoJS.AES.encrypt(texto, "Rodrigo").toString();
    setTextoCifrado(resultado);
    setTextoDescifrado(''); // limpiar descifrado anterior
  }

  const descifrar = () => {
    const bytes = CryptoJS.AES.decrypt(textoCifrado, "Rodrigo");
    const resultado = bytes.toString(CryptoJS.enc.Utf8);
    setTextoDescifrado(resultado);
  }

  return (
    <div className="App">
      <h1>Cifrador</h1>

      <input
        type="text"
        placeholder="Escribe el texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <br /><br />

      <button onClick={cifrar}>Cifrar</button>
      <br /><br />

      <p><strong>Texto Cifrado:</strong> {textoCifrado}</p>

      <button onClick={descifrar}>Descifrar</button>
      <br /><br />

      <p><strong>Texto Descifrado:</strong> {textoDescifrado}</p>
    </div>
  )
}

export default App
