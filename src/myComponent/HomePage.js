import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
export const HomePage = () => {

  const navigate = useNavigate();
  
    const createaccount = () => {
      navigate("/navbar")
    }

  return (
    
    <div class="card">
    <img style={{width:"100%", height:"100%"}} src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/ceab2f04699e55f59d94dc9b125fbda040148be8c4131da09a1cf2f124a57bc2.png" class="card-img-top" alt="..."/>
    <div class="card-body">
<center>
<h2 class="card-title">Let's start curdling the brain</h2>
   
<button class="btn btn-danger btn-lg mt-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"
style={{width:"120px", height:"60px", borderRadius:"30%", fontSize:"30px "}}
>
  Start
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">What you want to do?</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>


    <div class="card" >
  <img src="https://c.tenor.com/wTkR5wRSULAAAAAC/spongebob-squarepants-dance.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Go to Quiz Land</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-danger" onClick={createaccount}>Enter</button>
  </div>
</div>

<div class="card" >
  <img src="https://www.icegif.com/wp-content/uploads/icegif-662.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Do Some Practice</h5>
    <p class="card-text">Some quick exercises to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-warning">Enter</button>
  </div>
</div>

<div class="d-grid gap-2">
  <button class="btn btn-info mt-3" type="button">Explore More</button>
     </div>
    </div>
  </div>
</div>

</center>
    </div>
    <Footer/>
  </div>
   
  )
}
