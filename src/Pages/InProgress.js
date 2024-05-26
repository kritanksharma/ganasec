import React from 'react'
import progress from "../Static/under-maintence.svg";
import { Link } from "react-router-dom";

export default function InProgress() {
  return (
    <div className='card w-100 bg-light text-center' style={{borderRadius:"0px", border:"none", height:"800px"}}>
        <div className="card-text text-center py-4">
        <img
          src={progress}
          className="card-img"
          style={{maxHeight:"600px" ,maxWidth:"600px"}}
          alt="..."
        />
        <p className="m-2"> Ahh ! We are working on that . While it's out exploring, why not head back to our   <Link to="/">home page</Link> for more information and exciting discoveries?</p>
        </div>
    
    </div>
  )
}
