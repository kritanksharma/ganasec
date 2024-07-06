import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCubeScan } from "@mdi/js";
import { mdiCogs } from "@mdi/js";
import "./styles.css"; // Import the CSS file
import AnimateBlock from "./AnimateBlock";

export default function HeadSection2(props) {
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "90vh",
          borderRadius: "0px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-7">
            <div className={`card-body mx-3 text-${props.head.textAlign}`}>
              <AnimateBlock animationclassName="slide-forward">
                <h4 className="fs-5 text-light fw-bold my-4 content-to-animate">
                  {props.head.textUpperCase
                    ? props.head.textCaption.toUpperCase()
                    : props.head.textCaption}
                  <span className="active-color">
                    {props.head.textUpperCase
                      ? props.head.textCaptionHighlight.toUpperCase()
                      : props.head.textCaptionHighlight}
                  </span>
                </h4>
                <h3 className="display-2 text-light fw-bold mb-3 content-to-animate">
                  {props.head.textUpperCase
                    ? props.head.staticText.toUpperCase()
                    : props.head.staticText + " "}
                  <p className={`active-color text-opacity-75 text-${props.head.textAlign}`}>
                    {props.head.textUpperCase
                      ? props.head.highlightText.toUpperCase()
                      : props.head.highlightText}
                  </p>
                </h3>
              </AnimateBlock>
              <AnimateBlock animationclassName="slide-upward">
                <p className="card-text fs-6 text-secondary content-to-animate subtext">
                  {props.head.content}
                </p>
                {props.head.btnOptions && (
                  <div className="content-to-animate my-5">
                    <Link to="/penetration">
                      <button type="button" className="btn btn-primary btn-custom m-2 mt-3">
                        <Icon path={mdiCubeScan} size={1} color="#FFFFFF" />
                        <span className="mx-2">Penetration Testing</span>
                      </button>
                    </Link>
                    <Link to="/inprogress">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-outline-custom m-2 mt-3"
                      >
                        <Icon path={mdiCogs} size={1} className="primary" />
                        <span className="mx-2">Try few Vunerablity Tools</span>
                      </button>
                    </Link>
                  </div>
                )}
              </AnimateBlock>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={props.head.cardbg1}
              className="card-img-bottom"
              alt="..."
              style={{ height: props.head.height, width: props.head.width }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
