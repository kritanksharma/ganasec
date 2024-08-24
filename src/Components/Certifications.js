import React from "react";

export default function Certifications({ certificates }) {
  return (
    <div
      className="card bg-light p-4"
      style={{
        borderRadius: "0px",
        margin: "0px",
        border: "none",
        overflow: "auto",
      }}
    >
      <div className="container">
        <p className="text-center m-4 display-6">{certificates.title}</p>
        <div className="row my-4">
          {certificates.list.map((element, index) => (
            <div className="col-md-2 m-2 text-start" key={index}>
              <div
                className="card bg-light border-0 shadow-lg overflow-hidden card-hover-animation"
                style={{ border: "none" , width:"200px"}}
              >
                <img
                  src={element.image}
                  className="card-img-top"
                  style={{ backgroundColor: "#FFFFFF", height: "150px"}}
                  alt="..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
