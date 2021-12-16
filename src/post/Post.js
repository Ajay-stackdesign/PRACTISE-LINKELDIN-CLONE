import React from "react";
// import Avatar from '@mui/material/Avatar';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import InsertCommentIcon from '@mui/icons-material/InsertComment';
// import ShareIcon from '@mui/icons-material/Share';
// import "./Post.css"
// import { IconButton } from "@mui/material";
// import Header from "../header/Header";
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
// import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Header from "../header/Header";
import Content from "../Posts.js/Content"
import Footer from "../footer/Footer";
// import Content from "../Posts.js/Content";
// import { Link } from "react-router-dom"


const Post = () => {
    return (
        <div className="main">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Post