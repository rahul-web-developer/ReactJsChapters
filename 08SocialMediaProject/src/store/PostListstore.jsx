

import { createContext, useReducer } from "react";




export const PostListstore = createContext(
  {
  
    postlist:[],
    addpost:()=>{},
    deletepost:()=>{}
  
}

);



const postlistreducer = (currentpost,action)=>{


  let neewPostList = currentpost;


  if(action.type === "DELETE_POST"){

    neewPostList = currentpost.filter(data=> data.id !== action.payload.postid )
   
  }else if(action.type === "ADD_POST"){

    neewPostList = [action.payload,...currentpost]


  }

  console.log(neewPostList)
  return neewPostList;


}







const PostListstoreProvider = ({children})=>{


  const [postlist,dispatch] = useReducer(postlistreducer,DEFAULT_POST_LIST)


  const addpost = (useridvalue,postbodyvalue,posttitlevalue,reactionsvalue,tagsvalue)=>{

    console.log(useridvalue)
      console.log(postbodyvalue)
      console.log(posttitlevalue)
      console.log(tagsvalue)
      console.log(reactionsvalue)
  
      dispatch({
        type:"ADD_POST",
        payload:{
          id:Date.now(),
          title:posttitlevalue,
          body:postbodyvalue,
          reactions:reactionsvalue,
          userId:useridvalue,
         
          tags:tagsvalue,
        },
        
      })
  
  }

  const deletepost = (postid)=>{

    dispatch(
    {
      type:"DELETE_POST",
      payload:{
  
        postid,
  
      }
    }
   )
  
  }

return <PostListstore.Provider value={
{
   postlist,
   addpost,
   deletepost,
}
}>
{children}


</PostListstore.Provider>
}


const DEFAULT_POST_LIST = [
  {
    id:'1',
    title:'go to mumbai',
    body:'hi ',
    reactions:0,
    userId:'user1',
    image:'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfbGlvbl9pc29sYXRlZF9vbl9jb2xvcl9iYWNrZ3JvdW5kXzJhNzgwMjM1LWRlYTgtNDMyOS04OWVjLTY3ZWMwNjcxZDhiMV8xLmpwZw.jpg',
    tags:['vacation','tour','injoying']
  },
  {
    id:'2',
    title:'go to jaipur',
    body:'hello everyone ',
    reactions:1,
    userId:'user2',
    image:'https://media.istockphoto.com/id/1354939778/photo/close-up-of-a-roaring-lion.jpg?s=612x612&w=0&k=20&c=pEPRlwNwzj2vPTXvqA9WxNV7QSSBDe9kPfWxjyqLSgc=',
    tags:['vacation','jamnagar','party']
  },
]

export default PostListstoreProvider;

