import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import "./Content.css"
import { IconButton } from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Network from "../footer/network/Network";


const Content = ({ username, field, experience, imageURL, description, likes }) => {
    const [liking, setLiking] = useState(false)

    return (
        <div className="main">

            <Router>
                <Switch>
                    <Route exact path = "/network">
                        <Header />
                        <Network />
                        <Footer backButton="/network" />
                    </Route>
                    <Route path="/">
                        <Header />
                        <div className="post">
                            <p className="text"><strong>{username}</strong>likes this</p>
                            <div className="post__avatar">
                                <Avatar alt="Ajay sahani" src="/static/images/avatar/1.jpg" />
                            </div>
                            <div className="post_name">
                                <p className="post__tier"><strong>{username}</strong> .tier</p>
                                <p>{field}</p>
                                <p>{experience}</p>
                            </div>
                            <p className="post__description">{description}</p>
                            <img className="post__image" src={imageURL} alt="himalayan" />
                            <div className="post_flex">
                                <div className="post_likes__shows">
                                    <ThumbUpIcon fontSize="small" />
                                    <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>{likes}
                                    {liking ? liking + 1 : liking} people this
                                </div>
                                <div className="post__text">
                                    <p>no comments</p>
                                </div>
                            </div>
                            <div className="post__working">
                                {liking ? (
                                    <ThumbUpOutlinedIcon fontSize="medium" onClick={() => setLiking(false)}
                                    />
                                ) : (
                                    <ThumbUpAltIcon fontSize="medium" onClick={() => setLiking(true)} />
                                )}
                                {/* <Link to="/">
                        <ArrowBackOutlinedIcon /> */}
                                {/* </Link>
                    <Link to="/comment"> */}
                                <IconButton className="icon__comment">
                                    <InsertCommentIcon fontSize="medium" />
                                </IconButton>
                                {/* </Link> */}
                                <IconButton className="icon__share" >
                                    <ShareIcon  fontSize="medium" />
                                </IconButton>
                            </div>
                        </div>
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default Content