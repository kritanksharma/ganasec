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
        <div className="row my-4 d-flex justify-content-center">
          {certificates.list.map((element, index) => (
            <div className="col-md-2 m-2 px-2 d-flex justify-content-center" key={index}>
              <div
                className="card bg-light border-0 shadow-lg overflow-hidden"
                style={{ border: "none" , minWidth:"220px" , maxWidth:"220px"}}
              >
                <img
                  src={element.image}
                  className="card-img-top"
                  style={{ backgroundColor: "#FFFFFF", height: "180px"}}
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
