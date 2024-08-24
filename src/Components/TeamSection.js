import React from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiTwitter } from "@mdi/js";

export default function TeamSection({ teams }) {
  return (
    <div
      className="card bg-dark text-light p-3"
      style={{
        width: "100%",
        borderRadius: "0px",
        margin: "0px",
        border: "none",
        overflow: "auto",
      }}
    >
      <div className="container">
        <h1 className="card-title fw-medium display-5 my-2">
          <span> {teams.title}</span>
          <span className="active-color"> {teams.titleHighlight}</span>
        </h1>
        <div className="row my-4">
          <div className="col-md-4 my-5 text-start">
            <p className="badge text-bg-primary text-start">{teams.badge}</p>
            <h1 className="text-start fw-bold display-4 text-secondary">{teams.subtitle}</h1>
          </div>
          {teams.leaders.map((element, index) => (
            <div className="col-md-2 my-2 text-start" key={index}>
              <div
                className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
                style={{ border: "none", minWidth: "350px" }}
              >
                <img
                  src={element.photo}
                  className="card-img-top"
                  alt="..."
                  style={{ background: "#E6E6E6" }}
                />
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
        <div className="row my-4">
          {teams.description1 && <p className="col-md-12 text-start">{teams.description1}</p>}
          {teams.description2 && (
            <div className="col-md-6 text-start">
              <p>
                <span className="active-color">
                  {" "}
                  {teams.description2 ? teams.leaders[1].name + "-" : ""}
                </span>
                {teams.description2}
              </p>
              <p>
                <span className="active-color">
                  {teams.description3 ? teams.leaders[2].name + "-" : ""}
                </span>
                {teams.description3}
              </p>
            </div>
          )}
          {teams.description4 && <p className="col-md-6 text-start">{teams.description4} </p>}
        </div>
      </div>
    </div>
  );
}
