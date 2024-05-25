import React from "react";
import cardbg1 from "../Static/cardbg1.jpg";
import HeadSection from "../Components/HeadSection";
import Icon from "@mdi/react";
import { mdiEyeLock, mdiQrcodeScan, mdiArrowRight } from "@mdi/js";
import { Link } from "react-router-dom";
export default function Penetration() {
  const headSection1 = {
    textCaption: "There’s two ways to ",
    textCaptionHighlight: "get a rapid pentest quote with us",
    staticText: "But possible with GANASEC ! ",
    textOptions: false,
    textUpperCase: true,
    textAlign: "start",
    height: "200px",
    btnOptions: false,
    content: "Saving our clients time and money and protecting their proprietary information.",
    cardbg1: cardbg1,
  };
  const penetration = [
    {
      title: "Schedule a Scoping Call with our experts",
      block:
        "Want to talk through the details: Get on a call with one of our experts and we’ll work with you step by step to get a custom quote, quickly.",
      btn: "Schedule a Scoping Call | Customized",
      titleIcon: mdiEyeLock,
      btnIcon: mdiArrowRight,
      btnColor: "warning",
      badge: "customized | Hands-on",
      subBlock:
        "We hold steadfast to the principles of honesty and transparency in all our business dealings, perpetually seeking refinement through imaginative problem-solving and assuming full responsibility for our actions and their consequences.",
    },
    {
      title: "Schedule a Scoping Call with our experts",
      block:
        "Want to talk through the details: Get on a call with one of our experts and we’ll work with you step by step to get a custom quote, quickly.",
      btn: "Schedule a Scoping Call | Self-guided",
      titleIcon: mdiQrcodeScan,
      btnIcon: mdiArrowRight,
      btnColor: "info",
      badge: "faster | Self-guided",
      subBlock:
        "We hold steadfast to the principles of honesty and transparency in all our business dealings, perpetually seeking refinement through imaginative problem-solving and assuming full responsibility for our actions and their consequences.",
    },
  ];
  return (
    <>
      <HeadSection head={headSection1} />
      <div className="row p-5">
        {penetration &&
          penetration.map((element, index) => (
            <div className="col-md-6" key={index}>
              <span
                className="badge text-bg-danger"
                style={{ position: "relative", top: "10px", left: "20vw", zIndex: 1 }}
              >
                {element.badge}
              </span>
              <div className="card text-start bg-light border-0 shadow-lg overflow-hidden card-hover-animation">
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    <Icon path={element.titleIcon} size={1} className="mx-2 icon" />
                    {element.title}
                  </h5>
                  <p className="card-text basic-color fw-medium">{element.block}</p>
                  <p className="basic-color fw-light"> {element.subBlock}</p>
                  <Link to="/penetration">
                    <button
                      type="button"
                      className={`btn btn-${element.btnColor} basic-color m-2 mt-3`}
                    >
                      <span className="mx-2">{element.btn}</span>
                      <Icon path={element.btnIcon} size={1} color="#222222" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
