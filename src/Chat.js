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
      received: true,
    });

    setInput("");
  };
    return (
        <div className="chat">
         <div className="chat__header">
             <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFnoFlGkeQvnQ/profile-displayphoto-shrink_800_800/0/1589027558728?e=1631750400&v=beta&t=lXIICCEKlUYpPLSP2Jz96BdkcqfrA9G3AGs2JRHPMiw"
             />

         <div className="chat__headerInfo">
             <h3>Reet</h3>
             <p>Last seen at 4:30pm Tuesday</p>
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
