import React from "react";
import { mdiScaleUnbalanced, mdiCheckCircle , mdiBookArrowRight } from "@mdi/js";
import service1 from "../Static/services/app-window.svg";
import service2 from "../Static/services/netkwork.svg";
import service3 from "../Static/services/cloud-lock.svg";
import service4 from "../Static/services/qrcode.svg";
import ServiceSection from "../Components/ServiceSection";
import cardbg1 from "../Static/cardbg1.jpg";
import HeadSection from "../Components/HeadSection";
import SubscriptionModels from "../Components/SubscriptionModels";
export default function Services() {
  const headSection1 = {
    textCaption: "What we can ",
    textCaptionHighlight: "provide?",
    staticText: "Comprehensive offensive security.",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "220px",
    btnOptions: false,
    content: "Penetration testing simulates attacks on your systems to find weaknesses before real hackers do. Itʼs crucial for preventing costly data breaches and financial losses. By catching these issues early, you protect your business from major security threats and safeguard your reputation.",
    cardbg1: cardbg1,
  };
  const serviceSection = [
    {
      title: "Application Pentest",
      description: "We test your web and mobile applications to find security vulnerabilities, ensuring they are protected against potential attacks and data breaches.",
      linkURL: "",
      img: service1,
    },
    {
      title: "Network & API Pentest",
      description: "We evaluate the security of your network infrastructure and application APIs, identifying weaknesses that could be exploited to gain unauthorized access or disrupt operations. ",
      img: service2,
    },
    {
      title: "Cloud Security Pentest",
      description: "We assess the security of your AWS or Azure cloud environments, checking for vulnerabilities and misconfigurations to safeguard your cloud resources and data.",
      img: service3,
    },
    {
      title: "Source Code Review",
      description: "We analyze specific repositories or source code to identify security issues and vulnerabilities, providing recommendations to enhance code security and prevent exploitation.",
      img: service4,
    },
  ];
  const subscriptionReports = {
   badgeIcon: mdiScaleUnbalanced,
   title: "Subscription models tailored to you !",
   description: "Get continuous and actionable results prioritized by severity, so you know where to act first.",
    btnName: "Sample reports",
    bthIcon : mdiBookArrowRight,
    btnURL: "",
    block: 
      {
        title : 'Other Pentest Solutions' ,
        pointIcon: mdiCheckCircle,
        img: service2,
        points : [
          "Flexible : Start within 24 hours, with no long-term contract required",
          "Budget Friendly : Cost-effective pricing tailored to fit various budgets.",
          "Customizable : Tailor your subscription to fit specific needs or requirements.",
          "Emergency Response :  Rapid response services for critical issues or breaches." ,
          "Continuous : Ongoing, monthly testing to monitor and improve security." , 
          "On-Demand : Access services as needed without a regular commitment."
          
        ]
      },
  };
  return (
    <>
      <HeadSection head={headSection1} />
      <ServiceSection service={serviceSection} />
      <SubscriptionModels reports={subscriptionReports} />
    </>
  );
}
