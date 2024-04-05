

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';



function Sidebar({selecttab,sets}) {


  const home = ()=>{
    sets('Home')
  }

const  createpost = ()=>{
  sets("CreatePost")
}


  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary " style={{width:'200px'}}>
    <a xlinkHref="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a xlinkHref="#" onClick={home} className={`nav-link  text-black ${selecttab === "Home" && 'active text-white'} `} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a xlinkHref="#" onClick={createpost} className={`nav-link  text-black ${selecttab === "CreatePost" && 'active text-white'} `}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>


      
      
    
    </ul>
    <hr/>
    <div classNameName="dropdown">
      <a xlinkHref="#" classNameName="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" classNameName="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul classNameName="dropdown-menu text-small shadow">
        <li><a classNameName="dropdown-item" xlinkHref="#">New project...</a></li>
        <li><a classNameName="dropdown-item" xlinkHref="#">Settings</a></li>
        <li><a classNameName="dropdown-item" xlinkHref="#">Profile</a></li>
        <li><hr classNameName="dropdown-divider"/></li>
        <li><a classNameName="dropdown-item" xlinkHref="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    
    
    
    
    </>
  )
}

export default Sidebar