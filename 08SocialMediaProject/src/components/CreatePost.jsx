
import React, { useContext, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostListstoreProvider, { PostListstore } from '../store/PostListstore';



export default function CreatePost() {
  

  const {addpost} = useContext(PostListstore)


  const userid = useRef()
  const posttile = useRef()
  const postbody = useRef()
  const reactions = useRef()
  const tags = useRef()


  const handelSubmit = (e)=>{
    e.preventDefault();

    const useridvalue = userid.current.value;
    
    const posttitlevalue = posttile.current.value;

    const postbodyvalue = postbody.current.value;

    const reactionsvalue = reactions.current.value;

    const tagsvalue = tags.current.value;

   


addpost(useridvalue,postbodyvalue,posttitlevalue,reactionsvalue,tagsvalue)





  }


  return (
    <>
    

    
    <form className='create-post' onSubmit={(e)=>handelSubmit(e)}>

{/* userid div start here */}

    <div class="mb-3">
    <label htmlFor="userid" class="form-label">User's Id </label>
    <input
    ref={userid}
    type="text" 
    class="form-control" 
    id="userid" 
    placeholder='Your User Id..'
    

    />
    
  </div>

{/* userid div end here */}


  {/* reactions start here */}

  <div class="mb-3">
    <label htmlFor="reactions" class="form-label">Reaction's</label>
    <input type="text" 
    ref={reactions}
    class="form-control" 
    id="reactions" 
    placeholder='Reactions'
    

    />
    
  </div>
  {/* reactions reaction end here */}




{/* tags start here */}

<div class="mb-3">
    <label htmlFor="tags" class="form-label">Tags</label>
    <input type="text" 
    ref={tags}
    class="form-control" 
    id="tags" 
    placeholder='Tags....'
    
    />
    
  </div>
  {/* tags  end here */}




{/* post title start here */}
  <div class="mb-3">
    <label htmlFor="title" class="form-label">Post's Title</label>
    <input type="text"
    ref={posttile} 
    class="form-control" 
    id="title" 
    placeholder='How are feeling Today'
    

    />
    
  </div>

{/* post title end here */}
  

  {/* post content start */}
  <div class="mb-3">
    <label htmlFor="body" class="form-label">Post's Content</label>
    <textarea type="text" 
    ref={postbody}
    class="form-control" 
    rows="4"
    id="body" 
    placeholder='Tell us more about it..'
    

    />
    

  </div>
  {/* post content end here */}



  <button type="submit" class="btn btn-primary">Post</button>
</form>


    </>
  )
}
