import { Avatar } from "@mui/material";
import React from "react";
import "./Network.css"

const Network = () => {
    return (
        <div className="network">
            <div className="network__flex">
                <div className="network__invitation">
                    <h4>Invitations</h4>
                </div>
                <div className="network__see">
                    <h4>see all</h4>
                </div>
            </div>
            <h4>people you may know</h4>
            <div className="network__avatar">
                <Avatar alt="Name" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
    )
}

export default Network
