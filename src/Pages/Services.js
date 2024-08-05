import React from "react";
import { mdiBookArrowRight, mdiArrowRight, mdiOpenInNew } from "@mdi/js";
import service1 from "../Static/services/app-window.svg";
import service2 from "../Static/services/netkwork.svg";
import service3 from "../Static/services/cloud-lock.svg";
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
    staticText: "Comprehensive offensive security.",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "250px",
    btnOptions: false,
    content: "Penetration testing simulates attacks on your systems to find weaknesses before real hackers do. Itʼs crucial for preventing costly data breaches and financial losses. By catching these issues early, you protect your business from major security threats and safeguard your reputation.",
    cardbg1: cardbg1,
  };
  const serviceSection = [
    {
      title: "Application Pentest",
      description: "We test your web and mobile applications to find security vulnerabilities, ensuring they are protected against potential attacks and data breaches.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      linkURL: "",
      img: service1,
    },
    {
      title: "Network & API Pentest",
      description: "We evaluate the security of your network infrastructure and application APIs, identifying weaknesses that could be exploited to gain unauthorized access or disrupt operations. ",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      img: service2,
    },
    {
      title: "Cloud Security Pentest",
      description: "We assess the security of your AWS or Azure cloud environments, checking for vulnerabilities and misconfigurations to safeguard your cloud resources and data.",
      linkName: "Read More",
      linkIcon: mdiOpenInNew,
      img: service3,
    },
    {
      title: "Source Code Review",
      description: "We analyze specific repositories or source code to identify security issues and vulnerabilities, providing recommendations to enhance code security and prevent exploitation.",
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
    btnURL: "/penetration",
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
