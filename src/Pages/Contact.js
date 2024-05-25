import React from 'react'
import cardbg1 from "../Static/cardbg1.jpg";
import HeadSection from '../Components/HeadSection';
import Form from '../Components/Form';
export default function Contact() {
    const headSection1 = {
        textCaption: "let's",
        textCaptionHighlight: " Connect ",
        staticText: "We’d love to hear from you!",
        textOptions: false,
        textUpperCase: false,
        textAlign: "center",
        height: "450px",
        btnOptions: false,
        content:
          " Fill in the form below and we'll get back to you as soon as we can!",
        cardbg1: cardbg1,
      };
  return (
    <div>
        <HeadSection head={headSection1} />
        <div className='card m-3' style={{width:'600px'}}> 
        <Form/>
        </div>
       
    </div>
  )
}
