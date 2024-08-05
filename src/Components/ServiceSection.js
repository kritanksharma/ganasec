import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file

export default function ServiceSection(props) {
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
        <div className="container">
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
                        <p className="card-text my-4 text-secondary fs-6 description-lines">
                          {card.description}
                        </p>

                        <Link to={card.linkURL} style={{ textDecoration: "none" }}>
                          <p className="card-text fs-6 active-color">
                            {card.linkName}
                            <Icon
                              path={card.linkIcon}
                              size={1}
                              color="#378CE7"
                              className="mx-1 p-1"
                            />
                          </p>
                        </Link>
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
