import React from "react";
import { mdiBookArrowRight, mdiArrowRight, mdiOpenInNew } from "@mdi/js";
import service1 from "../Static/services/app-window.svg";
import service2 from "../Static/services/cloud-lock.svg";
import service3 from "../Static/services/netkwork.svg";
import service4 from "../Static/services/qrcode.svg";
import chart1 from "../Static/action-charts/line.png";
import chart2 from "../Static/action-charts/pie.png";
import ServiceSection from "../Components/ServiceSection";
import cardbg1 from "../Static/cardbg1.jpg";
import HeadSection from "../Components/HeadSection";
import ActionableReports from "../Components/ActionableReports";
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
  const actionReports = {
    title: "Actionable Reporting",
    description:
      "Our pentest report format is easy to understand and will give you all the information you need to secure your environment. We’ll provide a customized plan of action to help you combat any vulnerabilities, prioritized based on severity, and improve your security posture.",
    btnName: "Examaple sample reports",
    btnIcon: mdiBookArrowRight,
    btnURL: "",
    images: [chart1, chart2],
    pointIcon: mdiArrowRight,
    points: [
      "Cybersecurity risk score",
      "Resources for remediation",
      "Remediation report included",
    ],
  };
  return (
    <>
      <HeadSection head={headSection1} />
      <ServiceSection service={serviceSection} />
      <ActionableReports reports={actionReports} />
    </>
  );
}
