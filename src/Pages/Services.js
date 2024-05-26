import React from "react";
import { mdiOpenInNew} from "@mdi/js";
import service1 from "../Static/services/service3.jpeg";
import service2 from "../Static/services/service5.jpeg";
import service3 from "../Static/services/service2.jpeg";
import ServiceSection from "../Components/ServiceSection";
export default function Services() {
    const heading ={
        h1 : "Unveiling Advanced Solutions." ,
    }
    const headingCaption ={
        HC1 : "What we can", 
        HC2 : "provide?"
    }
  const serviceSection = [
    {
      textCaption: "WEB APPLICATION & API ",
      textCaptionHighlight: "PENETRATION",
      staticText: " ",
      headIcon: "",
      blockText:
        " We scrutinize every nook and cranny for vulnerabilities, offering clear, actionable insights and reports. Our process includes thorough testing and a free retest to ensure all fixes hold strong, keeping your online presence secure and seamless.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      linkURL: "",
      textUpperCase: true,
      img: service1,
    },
    {
      textCaption: "SERVER AND CLOUD SECURITY",
      textCaptionHighlight: " AUDITS",
      headIcon: "",
      staticText: " ",
      blockText:
        " Secure your cloud infrastructure with our specialized testing for both AWS and Azure environments. Ganasec identifies potential risks, providing straightforward solutions and detailed reports. Our approach ensures your cloud services remain fortified against threats, with the added assurance of free retests for ironclad security. ",
      linkName: "Read More",
      linkIcon: "",
      textUpperCase: true,
      img: service2,
    },
    {
      textCaption: "MOBILE APPILCATION",
      textCaptionHighlight: " PENETRATION",
      headIcon: "",
      staticText: " ",
      blockText:
        "Ganasec’s mobile app penetration testing services safeguard your application from emerging threats. We test, identify, and help remediate vulnerabilities, offering comprehensive reports and the promise of free retests to keep your app secure in the ever-evolving digital landscape.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      textUpperCase: true,
      img: service3,
    },
  ];
  return (
    <div style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        borderRadius: "0px",
      }}>
         <h4 className="fs-4 text-light fw-bold px-3 pt-2 text-start">
         <span>{headingCaption.HC1 && headingCaption.HC1.toUpperCase()}</span>{" "}
        <span className="active-color">{headingCaption.HC2 && headingCaption.HC2.toUpperCase()}</span>
          </h4>
      <h3 className=" display-6 text-light fw-bold pb-3 px-3 text-start">
        <span>{heading.h1 && heading.h1.toUpperCase()}</span>{" "}
        <span className="active-color">{heading.h2 && heading.h2.toUpperCase()}</span> 
      </h3>
      <ServiceSection services={serviceSection} />
    </div>
  );
}
