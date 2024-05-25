import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCubeScan } from "@mdi/js";
import { mdiCogs } from "@mdi/js";
import "./styles.css"; // Import the CSS file

export default function HeadSection(props) {
  const [dynamicText, setDynamicText] = useState("With Vigilance Always at the Fore.");
  const textOptions = [
    "With Shield Against Threats.            ",
    "With Watchful Eye Never Wavering.       ",
    "With Shield Never Faltering.            ",
    "With Vigilance Always at the Fore.       ",
  ];
  useEffect(() => {
    const updateText = () => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setDynamicText(textOptions[randomIndex]);
    };

    const intervalId = setInterval(updateText, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          borderRadius: "0px",
        }}
      >
        <div className={`card-body mx-3 text-${props.head.textAlign}`}>
          <h4 className="fs-4 text-light fw-bold my-2">
            {props.head.textUpperCase
              ? props.head.textCaption.toUpperCase()
              : props.head.textCaption}
            <span className="active-color">
              {props.head.textUpperCase
                ? props.head.textCaptionHighlight.toUpperCase()
                : props.head.textCaptionHighlight}
            </span>
          </h4>
          <h3 className="display-6 text-light fw-bold mb-3">
            {props.head.textUpperCase
              ? props.head.staticText.toUpperCase()
              : props.head.staticText + " "}
            <p className={`active-color text-opacity-75 text-${props.head.textAlign}`}>
              {props.head.textOptions &&
                (props.head.textUpperCase ? dynamicText.toUpperCase() : dynamicText)}
            </p>
          </h3>
          <p className="card-text fs-6 text-secondary">{props.head.content}</p>
          {props.head.btnOptions && (
            <div>
             <Link to="/penetration" >
              <button type="button" className="btn btn-primary btn-custom m-2 mt-3">
                <Icon path={mdiCubeScan} size={1} color="#FFFFFF" />
                <span className="mx-2">Penetration Testing</span>
              </button>
              </Link>
              <Link to="/inprogress" >
              <button type="button" className="btn btn-outline-primary btn-outline-custom m-2 mt-3">
                <Icon path={mdiCogs} size={1} className="primary" />
                <span className="mx-2">Try few Vunerablity Tools</span>
              </button>
              </Link>
            </div>
          )}
        </div>
        <img
          src={props.head.cardbg1}
          className="card-img-bottom w-100"
          alt="..."
          style={{ height: props.head.height }}
        />
      </div>
    </div>
  );
}
