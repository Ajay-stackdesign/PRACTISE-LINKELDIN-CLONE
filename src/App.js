import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react"
import './App.css';
// import Main from "./Main";
// import Footer from "./footer/Footer";
// import Header from "./header/Header";
import Post from "./post/Post";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [posts, setPosts] = useState([
    {
      username: "ajay sahani",
      field: "developer",
      experience: "fresher",
      imageURL: "https://blogbox.indianeagle.com/wp-content/uploads/2013/10/777-days-of-the-incredible-indian-himalayas-for-adventure-tourists.jpg",
      description: "finally i want to let u know that himalayan are the best fto view in month of may are the beauty for their scenamic view of mountain which changes every hour accorfding to the monsson",
      likes: "234",
    },

  ], [])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="app">
      <Button onClick={() => setOpen(true)}>sign up</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            sign up
          </Typography>
        </Box>
      </Modal>

      <Post username="ajay sahani"
        field="developer"
        experience="fresher"
        imageURL="https://blogbox.indianeagle.com/wp-content/uploads/2013/10/777-days-of-the-incredible-indian-himalayas-for-adventure-tourists.jpg"
        description="finally i want to let u know that himalayan are the best fto view in month of may are the beauty for their scenamic view of mountain which changes every hour accorfding to the monsson"
        likes="234"
      />
    </div>
  );
}

export default App;
