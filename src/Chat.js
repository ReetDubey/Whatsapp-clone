import React, { useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Mic from '@material-ui/icons/Mic';
import axios from "./axios";

function Chat( {messages} ) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new' , {
      message: input,
      name: "ReetD",
      timestamp: "Just now",
      received: false,
    });

    setInput("");
  };
    return (
        <div className="chat">
         <div className="chat__header">
             <Avatar />

         <div className="chat__headerInfo">
             <h3>Unknown</h3>
             <p>Last seen at...</p>
         </div>

         <div className="chat__headerRight">
                  <IconButton>
                <SearchIcon />
                  </IconButton>
                  <IconButton>
                <AttachFile />
                  </IconButton>
                  <IconButton>
                <MoreVert />
                  </IconButton>
         </div>
         </div>

        <div className="chat__body">
          {messages.map(message => (
              
              <p className={`chat__message ${message.received && "chat__receiver"}`}
              >
               <span className="chat__name">{message.name}</span> 
                {message.message}
               <span className="chat_timestamp">{message.timestamp}</span>
                
            </p>
          ))}
            


        </div>  

        <div className="chat__footer">
          <InsertEmoticonIcon />
            <form>
              <input value={input} onChange={e => setInput(e.target.value)}placeholder="Type a message"
                type="text" />
              <button onClick={sendMessage} type="submit">
                Send a Message
              </button>
              </form>
              <Mic />
            </div>  
        </div>
    );
}

export default Chat;
