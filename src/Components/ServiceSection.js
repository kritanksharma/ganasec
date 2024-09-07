import React, { useEffect, useRef } from "react";
import "./styles.css"; // Import the CSS file

export default function ServiceSection(props) {
  const tooltipRefs = useRef([]);
  useEffect(() => {
    tooltipRefs.current.forEach((ref) => {
      if (ref) new window.bootstrap.Tooltip(ref);
    });
    // Cleanup tooltips on unmount
    return () => {
      tooltipRefs.current.forEach((ref) => {
        if (ref) window.bootstrap.Tooltip.getInstance(ref)?.dispose();
      });
    };
  }, [tooltipRefs]);

  return (
    <>
      <div
        className="card"
        style={{
          width: "100%",
          borderRadius: "0px",
          margin: "0px",
          border: "none",
          overflow: "auto",
        }}
      >
        <div className="m-5">
          <div className="row my-4">
            {props.service.map((card, index) => (
              <div key={index} className="col-md-6 my-3">
                <div className="card bg-light border-0 rounded-0 shadow-lg overflow-hidden card-hover-animation">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={card.img}
                        className="card-img rounded-0 p-4"
                        alt="..."
                        style={{ background: "#E6E6E6", height: "100%" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-start">
                        <h5 className="card-title fw-bold text-uppercase fs-4">{card.title}</h5>
                        <div
                          className="card-text my-4 text-secondary fs-6 description-lines"
                          ref={(el) => (tooltipRefs.current[index] = el)}
                          data-toggle="tooltip"
                          data-placement="top"
                          title={card.description}
                        >
                          {card.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
