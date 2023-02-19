import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessage = () => {
    window.parent.postMessage("Hi dad!", "http://localhost:3001");
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3001") return;
      setRecievedMessage("Got this message from parent: " + e.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Child</h1>
      <button onClick={sendMessage}>Send message to parent</button>
      <p>{recievedMessage}</p>
    </div>
  );
}

export default App;
