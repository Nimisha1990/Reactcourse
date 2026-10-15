 import React from 'react'
 import { Link } from "react-router-dom";
 
 export default function Navbar(props) {
   return (
     <div>
       
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>{/*props is an object containing the props passed to the component */}
  <div className="container-fluid">
   <a className="navbar-brand" href="#">{props.title}</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
       {<li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>}
     </ul>
     <div className = "d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.changeColor('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>{/* onclick event handler to change the color to primary when the div is clicked */}
        <div className="bg-danger rounded mx-2" onClick={()=>{props.changeColor('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.changeColor('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.changeColor('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
      </div>

      

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>{/* text color changes based on the mode */}

        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" checked={props.mode === 'dark'} onChange={props.toggleMode} />
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
     </div>
   )
 }
 
 