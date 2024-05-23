import React from 'react'
import Icon from "@mdi/react";
import { mdiCubeScan , mdiGestureTapButton} from "@mdi/js";
export default function BodySection1(props) {
  return (
    <>
        <div
          className="card w-100 px-3 text-start"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              { props.body.img1 &&
                (
                  <img
                    src={props.body.img1}
                    className="img-fluid rounded-start my-3"
                    alt="..."
                    width="400"
                    height="300"
                  />
                ) 
              }
            </div>
            <div className="col-md-8">
              <div className="card-body my-3 py-4">
                <h2 className="card-title fw-bold basic-color">
                 {props.body.title1}
                </h2>
                <p className="card-text my-3 fs-6">
                {props.body.block11}
                </p>
                <p className="card-text my-3 fs-6">
                {props.body.block12}
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-4">
              {
                props.body.img2 && 
                (
                  <img
                    src={props.body.img2}
                    className="img-fluid rounded-start my-3"
                    alt="..."
                    width="300"
                    height="200"
                  />

                )
              }
            </div>
            <div className="col-md-8">
              <div className="card-body my-3 py-4">
                <h2 className="card-title fw-bold basic-color">
                 {props.body.title2}
                </h2>
                <p className="card-text my-3 fs-6">
                {props.body.block21}
                </p>
                <p className="card-text my-3 fs-6">
                {props.body.block22}
                </p>
                <button type="button" className="btn btn-primary btn-custom basic-color m-2 mt-3">
                <Icon path={mdiCubeScan} size={1} color="#222222"/>
               <span className="mx-2">Penetration Testing</span>
               </button>
               <button type="button" className="btn btn-outline-secondary basic-color m-2 mt-3">
                <Icon path={mdiGestureTapButton} size={1} color="#222222" className="p-1"/>
               <span className="mx-2">Let's Connect</span>
               </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
