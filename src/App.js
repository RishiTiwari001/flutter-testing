import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      console.log("Received:", event.data);
    };

    setWebsocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (websocket) {
      websocket.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send to Flutter</button>
    </div>
  );
}

export default App;
