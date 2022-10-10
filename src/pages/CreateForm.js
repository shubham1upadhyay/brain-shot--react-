import React from 'react'
import { useNavigate } from 'react-router-dom';
export const CreateForm = () => {

  const navigate = useNavigate();

  const category = () => {
    navigate("/pleasewait")
  }

  return (
    <div className='createform'>

      <form>
        <div><input id='name' className='mt-5 bg-info' style={{ width: "100%" }} type="text" placeholder='First Name' required /></div>
        <div><input style={{ width: "100%" }} className='mt-3 bg-warning' type="text" placeholder='Last Name' required /></div>
        <div><label className='mt-3' htmlFor="gender">Select Gender</label>

          <div><input className='mt-3' type="radio" name="gender" />
            <label htmlFor="male">Male</label></div>
          <div><input type="radio" name="gender" />
            <label htmlFor="female">Female</label></div>
        </div>

        <div><label className='mt-3' htmlFor="dob">Date of Birth</label>
          <input style={{ width: "100%" }} className='mt-3  bg-danger' placeholder='Select Date of Birth' type="date" name="" id="" /></div>
        <div><input style={{ width: "100%" }} className='mt-3 bg-info' type="email" name="" placeholder='Enter Your Mail' /></div>
        <div><input style={{ width: "100%" }} className='mt-3 bg-light' type="text" name="" placeholder='Enter Your City' /></div>
      </form>

      <center>
        <button onClick={category} className='btn btn-success mt-5 mb-5 btn-lg'>Let Me In</button>
      </center>
    
    </div>
  )
}
