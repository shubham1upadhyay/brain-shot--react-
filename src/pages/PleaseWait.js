import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PleaseWait = () => {
    const navigate = useNavigate();
   
    const category = () => {
        navigate("/category")
    }
const name = ()=>{
    document.getElementById(name);
}



  return (
    <div className="pleaseWait">
          <center>
          <img onClick={category} style={{ width: "100%"}} src="https://media1.giphy.com/media/4N3Mqhl8JRyYLapZgt/giphy.gif?cid=790b76115db62457edcb521beee9ceef1844133759015694&rid=giphy.gif&ct=ts" alt="" />

               <h2> {name}</h2>



          {/* <div style={{marginTop:"50%"}} onClick={category}>
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
