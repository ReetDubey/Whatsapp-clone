import React from "react";
import "./App.js";
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat";
function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
                <Avatar src= "data:image/jpeg;base64,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"/>
              <div className="sidebar__headerRight">
                  <IconButton>
                <DonutLargeIcon />
                  </IconButton>
                  <IconButton>
                <ChatIcon />
                  </IconButton>
                  <IconButton>
                <MoreVertIcon />
                  </IconButton>


              </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                  <SidebarChat />
                  <SidebarChat />
                  <SidebarChat />
                  
            </div>
        </div>
    );
}

export default Sidebar;