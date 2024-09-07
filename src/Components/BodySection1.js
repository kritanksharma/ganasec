import React, { useState } from "react";
import Icon from "@mdi/react";
import ConnectSection from "./ConnectSection";
import { Link } from "react-router-dom";
import AnimateBlock from "./AnimateBlock";
import { mdiOpenInNew } from "@mdi/js";
export default function BodySection1({ body }) {
  const [connectState, setConnectState] = useState(false);
  const connectHandler = () => {
    setConnectState(!connectState);
  };
  return (
    <>
      <div className="card w-100 p-4 text-start" style={{ border: "none", borderRadius: "0px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {body.img && (
              <AnimateBlock animationClass="slide-backward">
                <div className="text-start content-to-animate">
                  <img src={body.img} className="img-fluid rounded-start" alt="..." style={{ height: body.height, width: body.width }} />
                </div>
              </AnimateBlock>
            )}
          </div>

          <div className="col-md-8">
            <div className="card-body mt-5 pt-5">
              <h2 className="card-title fw-medium basic-color display-6">{body.title}</h2>
              <AnimateBlock animationClass="slide-forward">
                <p className="card-text mt-3 fs-6 content-to-animate fs-6 text-secondary" style={{ textAlign: "justify" }}>
                  {body.block1}
                </p>
                <p className="card-text mt-3 fs-6 content-to-animate fs-6 text-secondary" style={{ textAlign: "justify" }}>
                  {body.block2}
                </p>
                {body.points &&
                  body.points.map((point, index) => (
                    <div key={index}>
                      <div className="text-start">
                        <p className="fs-6 content-to-animate fs-6 basic-color">
                          <Icon path={body.pointIcon} size={1} color="#50C878" />
                          <span className="mx-2">{point} </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </AnimateBlock>

              <Link to={body.btn.btnUrl}>
                <button type="button" className="btn btn-outline-primary btn-outline-custom basic-color m-2 mt-3" style={{ width: "250px" }}>
                  <Icon path={body.btn.btnIcon} size={1} color="#222222" />
                  <span className="mx-2">{body.btn.btnName}</span>
                </button>
              </Link>
              <button type="button" className="btn btn-warning m-2 basic-color mt-3" onClick={connectHandler} style={{ width: "250px" }}>
                <span className="ml-2">Connect with Us </span>
                <Icon path={mdiOpenInNew} size={1} color="#222222" className="p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConnectSection connectState={connectState} closeConnect={connectHandler} />
    </>
  );
}
