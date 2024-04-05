



import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import PostList from './components/PostList';
import PostListstoreProvider from './store/PostListstore';

import './App.css';




function App() {

  let [selecttab,setselectab] = useState('Home');


 

  return (
    <PostListstoreProvider>
    <div className='container'>
   
    <Sidebar  selecttab={selecttab}  sets={setselectab}/>

    <div className='content'>
      <Header />

      {
        selecttab === "Home" ? ( <PostList image={'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'} />)  : (<CreatePost /> )
      }
      
     
      <Footer />

      
     
    </div>

    </div>
    
    </PostListstoreProvider>
  )
}





export default App