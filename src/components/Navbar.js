import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

    const navigate = useNavigate();
   
    const quiz = () => {
        navigate("/createaccount")
    }


    return (
        <div className="navBar bg-danger mx-3  my-3">
          <center>
            <img onClick={quiz} style={{ width: "100%"}} src="https://i.gifer.com/FOkx.gif" alt="" />
               
          {/* <div style={{marginTop:"50%"}} onClick={quiz}>
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div> */}


                </center>
        </div>
    )
}
