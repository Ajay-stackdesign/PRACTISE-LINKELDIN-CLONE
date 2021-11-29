import React from "react";
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import "./Header.css"


const Header = () => {
    return(
        <div className="header">
            <div className="avatar">
                <Avatar fontSize="medium" className="header__avatar" alt="" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="header__center">
                <input className="header__input" type="text" name="text" placeholder="search" />
                <SearchIcon fontSize="medium" className="header__search"/>
            </div>
            <div className="header__right">
                <ChatIcon fontSize="medium" className="header__chat" />   
            </div>
        </div>
    )
}

export default Header