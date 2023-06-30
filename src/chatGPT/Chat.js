import axios from "axios";
import React, { useState } from "react";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:4000/chat";
  const handleSend = (e) => {
    e.preventDefault();
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <button onClick={handleSend}>send</button>
      </form>
      <p>{response ? response : "nothing to show"}</p>
    </div>
  );
};

export default Chat;
