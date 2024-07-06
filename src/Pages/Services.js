import React from "react";
import { mdiOpenInNew } from "@mdi/js";
import service1 from "../Static/services/app-window.svg";
import service2 from "../Static/services/cloud-lock.svg";
import service3 from "../Static/services/netkwork.svg";
import service4 from "../Static/services/qrcode.svg";
import ServiceSection from "../Components/ServiceSection";
import cardbg1 from "../Static/cardbg1.jpg";
import cardbg2 from "../Static/fingerprint.png";
import HeadSection from "../Components/HeadSection";
import BodySection1 from "../Components/BodySection1";
export default function Services() {
  const headSection1 = {
    textCaption: "What we can ",
    textCaptionHighlight: "provide?",
    staticText: "Comprehensive offensive security .",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "250px",
    btnOptions: false,
    content:
      "Enhance your agility and accelerate innovation by gaining real risk insights with on-demand security resources. Cobalt enables a scalable response and risk remediation without the need to expand your workforce. With our comprehensive approach, you can address current challenges and adapt for future demands.",
    cardbg1: cardbg1,
  };
  const serviceSection = [
    {
      title: "Application Penetration",
      description:
        " We scrutinize every nook and cranny for vulnerabilities, offering clear, actionable insights and reports. Our process includes thorough testing and a free retest to ensure all fixes hold strong, keeping your online presence secure and seamless.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      linkURL: "",
      img: service1,
    },
    {
      title: "Cloud Security Audits",
      description:
        " Secure your cloud infrastructure with our specialized testing for both AWS and Azure environments. Ganasec identifies potential risks, providing straightforward solutions and detailed reports. Our approach ensures your cloud services remain fortified against threats, with the added assurance of free retests for ironclad security. ",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      img: service2,
    },
    {
      title: "Network & API Pentration",
      description:
        "Ganasec’s mobile app penetration testing services safeguard your application from emerging threats. We test, identify, and help remediate vulnerabilities, offering comprehensive reports and the promise of free retests to keep your app secure in the ever-evolving digital landscape.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      img: service3,
    },
    {
      title: "Source Code Review",
      description:
        "Ganasec’s mobile app penetration testing services safeguard your application from emerging threats. We test, identify, and help remediate vulnerabilities, offering comprehensive reports and the promise of free retests to keep your app secure in the ever-evolving digital landscape.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      img: service4,
    },
  ];
  const bodySection1 = {
    img2: cardbg2,
    title2: "The faster path to better security ! ",
    block21:
      "A one-of-a-kind, single pane of glass platform to easily manage all your cybersecurity solutions centrally, with a fully-managed and crowd-powered approach .",
      block22:
      "At GANA SEC, our mission is to revolutionize cybersecurity by providing accessible, comprehensive solutions that empower organizations to protect their digital assets with confidence. We strive to simplify the complex landscape of cybersecurity, making it practical, affordable, and effective for businesses of all sizes. With our commitment to innovation and accessibility, we are reshaping the cybersecurity industry, ensuring that every organization, regardless of size, can navigate the digital realm securely and confidently.",
    height2 : '400px',
    width2 : '800px'
  };
  return (
    <>
      <HeadSection head={headSection1} />
      <ServiceSection service={serviceSection} />
      <BodySection1 body={bodySection1} />
    </>
  );
}
