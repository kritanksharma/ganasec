import React from "react";
import Icon from "@mdi/react";

export default function SubscriptionModels({ reports }) {
  return (
    <>
      <div
        className="card w-100 my-3 p-5 text-start"
        style={{ border: "none", borderRadius: "0px" }}
      >
        <div className="row g-0 align-items-center p-4">
          <div className="col-md-6">
            <div className="card-body p-3">
              <div className="badge text-bg-primary text-start m-2">
                <Icon path={reports.badgeIcon} size={2} />
              </div>
              <h3 className="text-start fw-bold display-4 text-secondary-emphasis">
                {reports.title}
              </h3>
              <p
                className="card-text mt-2 fs-6 content-to-animate text-secondary"
                style={{ textAlign: "justify" }}
              >
                {reports.description}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-hover-animation">
              <div className="card text-start bg-light shadow-lg overflow-hidden p-2 pt-4">
                <div className="card-body p-2">
                  {reports.block.points.map((point, index) => (
                    <p key={index}>
                      <Icon
                        className="mx-1"
                        path={reports.block.pointIcon}
                        size={1}
                        color="#50C878"
                      />
                      <span className="basic-color text-start fw-bold">{point.split(":")[0]}:</span>
                      <span className="text-secondary text-start">{point.split(":")[1]}</span>
                    </p>
                  ))}
                  <a href="/" target="_blank" className="btn btn-primary btn-danger mx-2 mt-3">
                    <Icon path={reports.bthIcon} size={1} />
                    <span className="mx-2">{reports.btnName}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
