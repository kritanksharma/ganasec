import React from 'react'
import Form from '../Components/Form';
export default function ConnectSection(props) {
  return (
   props.connectState && (
    <div className="modal p-3" aria-live="assertive" aria-atomic="true" style={{display:'block'}}>
         <div className="modal-dialog modal-dialog-centered slide-upward">
           <div className="modal-content">
           <div className="modal-header">
           <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={props.closeConnect}></button>
           </div>
           <div className="modal-body">
           <h4 className="fw-bold">
            We’d <span className="active-color"> Love</span> to hear from you!
          </h4>
          <div className="mt-5">
          <Form/>
          </div>
          
          </div>
           
            </div>
          </div>
        </div>
   ) 
  )
}
