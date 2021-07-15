import { Avatar } from "@material-ui/core";
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
          <Avatar src="https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&w=1200"/>
          <div classname="sidebarChat__info">
              <h3>Unknown</h3>
              <p>This is the last msg</p>
          </div>  
        </div>
        
    );
}

export default SidebarChat;
