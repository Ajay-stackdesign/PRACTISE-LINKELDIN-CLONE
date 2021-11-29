import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import { IconButton } from "@mui/material";
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="icon1">
                <IconButton className="footer__home">
                    <HomeIcon fontSize="large" />
                    <small className="home">Home</small>
                </IconButton>
            </div>
            {/* <IconButton className="footer__home">
                <HomeIcon fontSize="large" />
                <small className="home">Home</small>
            </IconButton> */}
            <div className="icon2">
                <IconButton className="footer__access">
                    <AccessibilityNewIcon fontSize="large" />
                    <small className="network">Network</small>
                </IconButton>
            </div>
            <div className="icon3">
                <IconButton className="footer__add">
                    <AddBoxIcon fontSize="large" />
                    <small className='post'>Post</small>
                </IconButton>
            </div>
            <div className="icon4">
                <IconButton className="footer__notification">
                    <NotificationsIcon fontSize="large" />
                    <small className="notification">Notifications</small>
                </IconButton>
            </div>
            <div className="icon5">
                <IconButton className="footer__work">
                    <WorkIcon fontSize="large" />
                    <small className="job">jobs</small>
                </IconButton>
            </div>
            {/* <IconButton className="footer__access">
                <AccessibilityNewIcon fontSize="large" />
                <small className="network">My Network</small>
            </IconButton>
            <IconButton className="footer__add">
                <AddBoxIcon fontSize="large" />
                <small className='post'>Post</small>
            </IconButton>
            <IconButton className="notification">
                <NotificationsIcon fontSize="large" />
                <small className="notification">Notifications</small>
            </IconButton>
            <IconButton className="work">
                <WorkIcon fontSize="large" />
                {/* <p className="job">jobs</p> */}
        {/* </IconButton> * /} */}

        </div >
    )
}

export default Footer