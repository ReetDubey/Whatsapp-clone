import { Avatar } from "@material-ui/core";
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
          <Avatar />
          <div classname="sidebarChat__info">
              <h3>Unknown</h3>
              <p>This is the last msg</p>
          </div>  
        </div>
    );
}

export default SidebarChat;
