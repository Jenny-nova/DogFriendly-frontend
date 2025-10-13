import './App.css';
import PlacesList from './components/PlacesList';
import { useState } from 'react';
import { api as axios } from './api/client';

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleGuest = () => {
    setUser({ username: "Invitado" });
  };

  
  const handleRegister = () => {
    setShowRegister(true);
    setErrorMessage("");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usernameInput.trim() || !emailInput.trim()) {
      setErrorMessage("Por favor, completa todos los campos");
      return;
    }
    try {
      const response = await axios.post("/register", {
        username: usernameInput.trim(),
        email: emailInput.trim()
      });
      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        setUser({ username: response.data.username });
        setShowRegister(false);
        setUsernameInput("");
        setEmailInput("");
        setErrorMessage("");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error al registrar usuario. Intenta de nuevo.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenid@ a DogFriendly</h1>
        <p>La web donde podrás encontrar restaurantes en los que disfrutar con tu mascota!</p>

        
        {!user && !showRegister && (
          <div>
            <p>¿Te gustaría registrarte o probar como invitado?</p>
            <button className="button" onClick={handleRegister}>Registrarse / Iniciar sesión</button>
            <button className="button" onClick={handleGuest}>Probar como invitado</button>
          </div>
        )}

        
        {!user && showRegister && (
          <div>
            <form onSubmit={handleSubmit}>
              <p>Introduce tu nombre de usuario:</p>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Nombre de usuario"
                className="input-field"
              />
              <p>Introduce tu email:</p>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Email"
                className="input-field"
              />
              {errorMessage && <p className="error">{errorMessage}</p>}
              <button type="submit" className="button">Registrarme</button>
              <button type="button" onClick={handleGuest} className="button secondary">Probar como invitado</button>
            </form>
          </div>
        )}

        
        {user && (
          <div>
            <p>Bienvenid@, {user.username}</p>
            <PlacesList user={user} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

