import "./App.css";
import { useState, useeffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io("hrrp://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendchat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message });
    setMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>hiii Anshul</h1>
        <form onSubmit={sendchat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            // value={}
            onChange =  {(e) => {
              this.setMessage(e.target.value);
            }}
          ></input>

          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
