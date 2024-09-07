import React from "react";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import AnimateBlock from "./AnimateBlock";

export default function ActionableReports(props) {
  return (
    <>
      <div className="card w-100 mb-5 p-4 text-start" style={{ border: "none", borderRadius: "0px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-7">
            <div className="card-body pb-4">
              <h2 className="card-title fw-medium basic-color display-6">{props.reports.title}</h2>
              <AnimateBlock animationClass="slide-forward">
                <p className="card-text mt-5 fs-6 content-to-animate fs-6 text-secondary" style={{ textAlign: "justify" }}>
                  {props.reports.description}
                </p>
                {props.reports.points &&
                  props.reports.points.map((point, index) => (
                    <div key={index}>
                      <div className="text-start">
                        <p className="fs-6 content-to-animate fs-6 basic-color">
                          <Icon path={props.reports.pointIcon} size={1} />
                          <span className="mx-2">{point} </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </AnimateBlock>

              <Link to={props.reports.btnURL}>
                <button type="button" className="btn btn-outline-secondary basic-color m-2 mt-3">
                  <span className="mx-2">{props.reports.btnName}</span>
                  <Icon path={props.reports.btnIcon} size={1} />
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-5">
            {props.reports.images && (
              <div className="row g-0">
                {props.reports.images.map((image, index) => (
                  <div key={index} className="col-md-6">
                    <div className="card text-start m-2">
                      <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
