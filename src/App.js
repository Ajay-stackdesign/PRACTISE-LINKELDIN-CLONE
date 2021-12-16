import React, { useEffect, useState } from "react"
import './App.css';
// import Main from "./Main";
// import Footer from "./footer/Footer";
// import Header from "./header/Header";
// import Post from "./post/Post";
// import firebase from "firebase";
import { db } from "./firebase";
import Content from "./Posts.js/Content";
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
// import Header from "./header/Header";
// import Footer from "./footer/Footer";

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
    return() => {
      unsubscribe();
    }
  },[posts])

  return (
    <div className="app">
      {/* <Header /> */}
      {/* <Post username="ajay sahani"
        field="developer"
        experience="fresher"""
        imageURL="https://blogbox.indianeagle.com/wp-content/uploads/2013/10/777-days-of-the-incredible-indian-himalayas-for-adventure-tourists.jpg"
        description="finally i want to let u know that himalayan are the best fto view in month of may are the beauty for their scenamic view of mountain which changes every hour accorfding to the monsson"
        likes="234"
      /> */}
      {
        posts.map((post) => (<Content username={post.username} 
          field={post.field} experience={post.experience} 
          imageURL={post.imageURL} description={post.description}
          likes={post.likes}
        />))
      }
      {/* <Post /> */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;
