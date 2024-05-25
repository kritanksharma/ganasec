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
          <div className="col-md-4 my-2 text-start">
            <div
              className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
              style={{ border: "none" }}
            >
              <img src={props.team.d1.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">{props.team.d1.name}</h5>
                <p className="p-1 ">
                  <a href={props.team.d1.linkedin}>
                    <Icon className="p-1" path={mdiLinkedin} size={1} title="LinkedIn" />
                  </a>
                  <a href={props.team.d1.twitter}>
                    <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 text-start">
            <div
              className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
              style={{ border: "none" }}
            >
              <img src={props.team.d2.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">{props.team.d2.name}</h5>
                <p className="p-1 ">
                  <a href={props.team.d2.linkedin}>
                    <Icon className="p-1" path={mdiLinkedin} size={1} title="LinkedIn" />
                  </a>
                  <a href={props.team.d2.twitter}>
                    <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2 text-start">
            <div
              className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
              style={{ border: "none" }}
            >
              <img src={props.team.d3.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">{props.team.d3.name}</h5>
                <p className="p-1 ">
                  <a href={props.team.d3.linkedin}>
                    <Icon className="p-1" path={mdiLinkedin} size={1} title="LinkedIn" />
                  </a>
                  <a href={props.team.d3.twitter}>
                    <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
