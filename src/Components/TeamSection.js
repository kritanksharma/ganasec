import React from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";

export default function TeamSection(props) {
  return (
    <div
      className="card bg-light"
      style={{
        width: "100%",
        borderRadius: "0px",
        margin: "0px",
        border: "none",
        overflow: "auto",
      }}
    >
      <div className="container">
        <h1 className="text-center m-4 fw-bold">Our Leadership Team</h1>
        <div className="row my-4">
          {props.team.map((element, index) => (
              <div className="col-md-4 my-2 text-start">
              <div
                className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
                style={{ border: "none" }}
              >
                <img src={element.photo} className="card-img-top" alt="..." style={{background:'#E6E6E6'}}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{element.name}</h5>
                  <p className="card-subtitle"> {element.role}</p>
                  <p className="p-1 ">
                    <a href={element.linkedin}>
                      <Icon className="p-1" path={mdiLinkedin} size={1} title="LinkedIn" />
                    </a>
                    <a href={element.twitter}>
                      <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}
