import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Categories = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/home")
  }

  const onePageAssessment = () => {
    navigate("/onePageAssessment")
  }

  return (
    <>
      <header>
        <div class="d-grid gap-2">
          <button onClick={home} class="btn btn-info" type="button">Back to Home</button>
        </div>
      </header>

      <body>
        <center>
          <div class="btn-group mt-5">
            <button type="button" class="btn btn-danger dropdown-toggle mt-5" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Category
            </button>
            <ul class="dropdown-menu dropdown-menu-end mt-5">
              <li><button onClick={onePageAssessment} className='mt-3'>One-Page Assessment</button></li>              
              <li><button className='mt-3'>Educational Quizzes</button></li>
              <li><button className='mt-3'>Educational Games</button></li>
              <li><button className='mt-3'>Fun Quizzes</button></li>
              <li><button className='mt-3'>Fun Games</button></li>
            </ul>
          </div>
        </center>

      </body>
      
      <footer>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </footer>


    </>
  )
}
