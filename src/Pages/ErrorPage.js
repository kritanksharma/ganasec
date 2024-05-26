import React from 'react'
import error from "../Static/error.png";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='card w-100 bg-light text-center' style={{borderRadius:"0px", border:"none", height:"800px"}}>
        <div className="card-text text-center py-4">
        <img
          src={error}
          className="card-img"
          style={{maxHeight:"600px" ,maxWidth:"600px"}}
          alt="..."
        />
        <p className="m-2">Oops! It seems like the page you were searching for has gone on an unexpected adventure.</p>
        <p className="m-2">While it's out exploring, why not head back to our   <Link to="/">home page</Link> for more information and exciting discoveries?</p>
        </div>
    
    </div>
  )
}
