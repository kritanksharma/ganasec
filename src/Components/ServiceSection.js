import React, { useEffect } from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file

export default function ServiceSection(props) {
  useEffect(() => {
    // Function to simulate clicking the "Next" button
    const clickNext = () => {
      const nextButton = document.querySelector(".carousel-control-next");
      if (nextButton) {
        nextButton.click();
      }
    };

    // Start the interval to click "Next" every 5 second (5000 milliseconds)
    const interval = setInterval(clickNext, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div style={{ width: "100%", borderRadius: "0px", border: "none" }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators my-2">
            {props.services.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner" style={{ maxHeight: "800px" }}>
            {props.services.map((element, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""} slide-upward`}
                key={index}
              >
                <div
                  className="card"
                  style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0px",
                  }}
                >
                  <div className="card-body text-start">
                    <h4 className="fs-4 text-light fw-bold my-2">
                      {element.headIcon && (
                        <Icon path={element.headIcon} size={1} color="#378CE7" className="mx-2" />
                      )}
                      {element.textUpperCase
                        ? element.textCaption.toUpperCase()
                        : element.textCaption}
                      <span className="active-color">
                        {element.textUpperCase
                          ? element.textCaptionHighlight.toUpperCase()
                          : element.textCaptionHighlight}
                      </span>
                    </h4>
                    <h3 className="display-6 text-light fw-bold mb-3">
                      {element.textUpperCase
                        ? element.staticText.toUpperCase()
                        : element.staticText + " "}
                    </h3>
                    <p className="card-text fs-6 text-secondary">{element.blockText}</p>
                    <Link to={element.linkURL} style={{ textDecoration: "none" }}>
                      <p className="card-text fs-6 active-color">
                        {element.linkName}
                        <Icon
                          path={element.linkIcon}
                          size={1}
                          color="#378CE7"
                          className="mx-1 p-1"
                        />
                      </p>
                    </Link>
                  </div>
                  <img src={element.img} className="card-img-bottom" alt="..." />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
