import {useState} from "react";
import './App.css';

function App() {
  const [secretMessage, setSecretMessage]=useState("")

  return (
    <div className="App">
      <h1>HI, Im Noah!</h1>
      <img className="profile-pic" src="https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A cool pic" />
      <ul>
        <li>I'm in 6th grade</li>
        <li>I love react</li>
        <li>I like dogs 🐶 </li>
      </ul>
      <button onClick={() => alert("u found your first special button, cool.")}>dont mind me</button>
      <button onClick={() => setSecretMessage("u found another special button, cool.")}>secret1</button>
      {secretMessage && <div>{secretMessage}</div>}
    </div>
  );
}

export default App;
