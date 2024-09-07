import React, { useState } from "react";

export default function Certifications({ certificates }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseOut = () => {
    setHoveredIndex(null);
  };
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
      <div>
        <p className="text-center m-4 display-6">{certificates.title}</p>
        <div className="row my-4 d-flex justify-content-center">
          {certificates.list.map((element, index) => (
            <div className={`col-md-${hoveredIndex === index ? "3" : "1"} m-2 p-0 d-flex justify-content-center`} key={index} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
              <div className="card p-1 bg-light border-0 shadow-lg overflow-hidden" style={{ border: "none", minWidth: "250px", maxWidth: "250px" }}>
                <img src={element.image} className="card-img-top" style={{ backgroundColor: "#FFFFFF", height: "180px" }} alt="..." />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
