import React, { useState, useEffect } from "react";
import cardbg1 from "../static/cardbg1.jpg";
import Icon from "@mdi/react";
import { mdiCubeScan} from "@mdi/js";
import { mdiCogs} from "@mdi/js";
import "./styles.css"; // Import the CSS file

export default function HeadSection() {
  const [dynamicText, setDynamicText] = useState("With Vigilance Always at the Fore.");
  const textCaption="Where are ";
  const textCaptionHighlight = " We ?";
  const staticText = "Stay secure round-the-clock , Protecting Your Digital Realm Uninterruptedly"
  const textOptions = [
  "With Shield Against Threats.            ",
  "With Watchful Eye Never Wavering.       ",
  "With Shield Never Faltering.            ",
  "With Vigilance Always at the Fore.       "

  ];  
  const content =
    "Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety. Join us , where security challenges transform into growth opportunities. Experience the fastest, most affordable solutions for compliance and year-round asset security.";

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
        <div className="card-body mx-3 text-start">
          <h4 className="fs-4 text-light fw-bold my-2">
            {textCaption.toUpperCase()}
            <span className="active-color">{ textCaptionHighlight.toUpperCase()}</span>
          </h4>
          <h3 className="display-6 text-light fw-bold mb-3">
           { staticText.toUpperCase() + " "}
            <p className="active-color text-opacity-75 text-start">
              {dynamicText.toUpperCase()}
            </p>
          </h3>
          <p className="card-text fs-6 text-secondary">{content}</p>
          <button type="button" className="btn btn-primary btn-custom m-2 mt-3">
          <Icon path={mdiCubeScan} size={1} color="#FFFFFF"/>
           <span className="mx-2">Penetration Testing</span>
          </button>
          <button type="button" className="btn btn-outline-primary btn-outline-custom m-2 mt-3">
          <Icon path={mdiCogs} size={1} className="primary"/>
          <span className="mx-2">Try few Vunerablity Tools</span>
          </button>
        </div>
        <img src={cardbg1} className="card-img-bottom w-100" alt="..." />
      </div>
    </div>
  );
}
