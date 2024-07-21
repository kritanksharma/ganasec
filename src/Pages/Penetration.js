import React from "react";
import cardbg1 from "../Static/cardbg1.jpg";
import HeadSection from "../Components/HeadSection";
import Icon from "@mdi/react";
import { mdiEyeLock, mdiQrcodeScan, mdiWhatsapp, mdiEmailNewsletter } from "@mdi/js";
export default function Penetration() {
  
  // Email Configuration
  const email = "SALES@GANASEC.COM";
  const subject = "Schedule a Scoping Call";

  // Calculate current date + 1 day
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const nextDate = today.toISOString().split("T")[0];

  const headSection1 = {
    textCaption: "There’s two ways to ",
    textCaptionHighlight: "get a rapid pentest quote with us",
    staticText: "But possible with GanaSec ! ",
    textOptions: false,
    textUpperCase: false,
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
      badge: "customized | Hands-on",
      subBlock:
        "We hold steadfast to the principles of honesty and transparency in all our business dealings, perpetually seeking refinement through imaginative problem-solving and assuming full responsibility for our actions and their consequences.",
      email: `mailto:${email}?subject=${
        encodeURIComponent(subject) + "~ customized "
      }&body='I am interested to schedule a call on ${nextDate}.}`,
      whatsapp:
        "https://wa.me/916000279927?text=I'm%20interested%20to%20schedule(customized)%20call%20with%20experts",
    },
    {
      title: "Schedule a Scoping Call with our experts",
      block:
        "Want to talk through the details: Get on a call with one of our experts and we’ll work with you step by step to get a custom quote, quickly.",
      btn: "Schedule a Scoping Call | Self-guided",
      titleIcon: mdiQrcodeScan,
      badge: "faster | Self-guided",
      subBlock:
        "We hold steadfast to the principles of honesty and transparency in all our business dealings, perpetually seeking refinement through imaginative problem-solving and assuming full responsibility for our actions and their consequences.",
      email: `mailto:${email}?subject=${
        encodeURIComponent(subject) + "~ self-guide"
      }&body='I am interested to schedule a call on ${nextDate}.}`,
      whatsapp:
        "https://wa.me/916000279927?text=I'm%20interested%20to%20schedule(self-guided)%20call%20with%20experts",
    },
  ];

  return (
    <>
      <HeadSection head={headSection1} />
      <div className="row p-5">
        {penetration &&
          penetration.map((element, index) => (
            <div className="col-md-6" key={index}>
              <div className="card-hover-animation">
                <span
                  className="badge text-bg-danger"
                  style={{ position: "relative", top: "5px", left: "18vw", zIndex: 1 }}
                >
                  {element.badge}
                </span>
                <div className="card text-start bg-light border-0 shadow-lg overflow-hidden">
                  <div className="card-body">
                    <p className="card-title mb-2 fs-4">
                      <Icon path={element.titleIcon} size={1} className="mx-2 icon" />
                      {element.title}
                    </p>
                    <p className="card-text text-secondary fw-medium">{element.block}</p>
                    <p className="basic-color"> {element.subBlock}</p>
                    <span className="p-1">
                      <a href={element.whatsapp} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiWhatsapp} size={1} title="Connect via Whatsapp" />
                      </a>
                      <a href={element.email} target="_blank" rel="noopener noreferrer">
                        <Icon
                          className="mx-3"
                          path={mdiEmailNewsletter}
                          size={1}
                          title="Connect via Email "
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
