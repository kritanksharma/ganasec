import React from "react";
import cardbg1 from "../Static/cardbg1.jpg";
import Timeline from "../Components/Timeline";
import step1 from "../Static/work-step/planning.svg";
import step2 from "../Static/work-step/Vulnerability.svg";
import step3 from "../Static/work-step/Penetration.svg";
import step4 from "../Static/work-step/Reporting.svg";
import step5 from "../Static/work-step/security.svg";
import step6 from "../Static/work-step/Post-Remediation.svg";
import {
  mdiShieldBugOutline,
  mdiCogSyncOutline,
  mdiCubeScan,
  mdiChartBoxMultiple,
  mdiSecurity,
  mdiGoogleAssistant,
} from "@mdi/js";
import HeadSection from "../Components/HeadSection";

export default function Works() {
  const headSection1 = {
    textCaption: "What's new at",
    textCaptionHighlight: " GanaSec !",
    staticText: "Everything you need to be secure, and stay that way.",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "220px",
    btnOptions: false,
    content:
      "The engagement process is a series of steps to plan, execute, and report on a penetration test, ensuring clear communication, defined scope, and effective results.",
    cardbg1: cardbg1,
  };
  const timelineInfo = [
    {
      title: "Scoping Call",
      block:
        "We understand your assets which are in scope, what is the goal of your pentest, develop a testing strategy and finalize timing & pricing.",
      blockBg: "#fff",
      icon: mdiCogSyncOutline,
      iconTitle: "Scoping Call",
      iconBg: "#EC994B",
      img: step1,
    },
    {
      title: "Assessment",
      block:
        "We gather necessary information about your environment, identify potential services, and tailored to your needs.",
      blockBg: "#fff",
      icon: mdiShieldBugOutline,
      iconTitle: "Assessment",
      iconBg: "#FF5B22",
      img: step2,
    },
    {
      title: "Testing",
      block:
        "We conduct the penetration test by exploiting identified vulnerabilities within the agreed scope, documenting findings and evidence as we proceed.",
      blockBg: "#fff",
      icon: mdiCubeScan,
      iconTitle: "Testing",
      iconBg: "#378CE7",
      img: step3,
    },
    {
      title: "Reporting & Analysis",
      block:
        "We compile our findings into a comprehensive report, including detailed descriptions of vulnerabilities, risks, and recommendations for remediation.",
      blockBg: "#fff",
      icon: mdiChartBoxMultiple,
      iconTitle: "Reporting & Analysis",
      iconBg: "#4CCD99",
      img: step4,
    },
    {
      title: "On-Call Support Remediation",
      block:
        "We provide support to help you understand and fix the identified vulnerabilities, ensuring you have the guidance needed to implement effective solutions.",
      blockBg: "#fff",
      icon: mdiSecurity,
      iconTitle: "On-Call Support Remediation",
      iconBg: "#67C6E3",
      img: step5,
    },
    {
      title: "Re-Testing & Validation",
      block:
        "We re-test to verify that the vulnerabilities have been successfully remediated and ensure no new issues have been introd",
      blockBg: "#fff",
      icon: mdiGoogleAssistant,
      iconTitle: "Re-Testing & Validation",
      iconBg: "#A9A9A9",
      img: step6,
    },
  ];
  return (
    <div>
      <HeadSection head={headSection1} />
      <Timeline timeline={timelineInfo} />
    </div>
  );
}
