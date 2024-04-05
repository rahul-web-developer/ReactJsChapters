
import {AiFillDelete} from 'react-icons/ai'

import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostListstore } from '../store/PostListstore';
function Post({data}) {


const {deletepost} = useContext(PostListstore)

  


  return (
    <>
    
    <div className="card post-card" style={{width: "18rem"}}>
  <img src={data.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.title}
    
    <span className='position-absolute top-0 start-100 translate-middle rounded-pill bg-danger'
    onClick={()=>deletepost(data.id)}
    >
   <AiFillDelete />
<span className='visually-hidden'>unread message</span>

    </span>
    </h5>
    <p className="card-text">{data.body}.</p>
    
    
      <span  className='badge text-bg-primary badg'>#{data.tags}</span>
    
   
   <div className='alert alert-success reactions' role='alert'>
    this post has been reacted by {data.reactions}
   </div>


  </div>
</div>
    </>
  )
}

export default Post