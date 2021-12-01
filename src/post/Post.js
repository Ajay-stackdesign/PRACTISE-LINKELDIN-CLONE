import React from "react";
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import "./Post.css"
import { IconButton } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import Header from "./header/Header";
// import Footer from "./footer/Footer";


const Post = ({ username, field, experience, imageURL, description, likes }) => {
    return (
        <div className="main">
            <Header />
            <div className="post">
                <p className="text"><strong>{ username }</strong> likes this</p>
                <div className="post__avatar">
                    <Avatar alt="Ajay sahani" src="/static/images/avatar/1.jpg" />
                </div>
                <div className="post_name">
                    <p className="post__tier"><strong>{username}</strong> .tier</p>
                    <p>{ field }</p>
                    <p>{ experience }</p>
                </div>
                <p className="post__description">{ description }</p>
                <img className="post__image" src={ imageURL } alt="himalayan" />
                <div className="post_flex">
                    <div className="post_likes__shows">
                        <ThumbUpIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>{likes}
                    </div>
                    <div className="post__text">
                        <p>no comments</p>
                    </div>
                </div>
                <div className="post__working">
                    <ThumbUpAltIcon fontSize="large" />
                    <IconButton className="icon__comment">
                        <InsertCommentIcon fontSize="large" />
                    </IconButton>
                    <IconButton className="icon__share" fontSize="large" >
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post