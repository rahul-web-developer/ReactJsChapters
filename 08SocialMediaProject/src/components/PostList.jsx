

import React, { useContext } from 'react'
import Post from './Post';

import { PostListstore } from '../store/PostListstore';


function PostList({image}) {


  const {postlist} = useContext(PostListstore)

  

  return (
    <>
 
 {
  postlist.map(data=><Post key={data.id} data={data} />)
 }
  
    
    
    </>
  )
}

export default PostList;