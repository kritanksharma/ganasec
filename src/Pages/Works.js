import React from "react";
import cardbg1 from "../Static/cardbg1.jpg";
import Timeline from "../Components/Timeline";
import step1 from '../Static/work-step/planning.svg';
import step2 from '../Static/work-step/Vulnerability.svg';
import step3 from '../Static/work-step/Penetration.svg';
import step4 from '../Static/work-step/Reporting.svg';
import step5  from '../Static/work-step/security.svg';
import step6 from '../Static/work-step/Post-Remediation.svg';
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
    staticText: "Everything you need to be secure, and stay that way ",
    textOptions: false,
    textUpperCase: true,
    textAlign: "center",
    height: "250px",
    btnOptions: false,
    content:
      " Our unwavering dedication to collaboration, customer-centricity, and security serves as the guiding force behind every endeavor we undertake.",
    cardbg1: cardbg1,
  };
  const timelineInfo = [
    {
      title: "Reconnaissance And Planning",
      block:
        "This is the phase of Information Gathering and mapping of organization’s infrastructure.And analysis of the infrastructure.",
      blockBg: "#fff",
      icon: mdiCogSyncOutline,
      iconTitle: "Reconnaissance And Planning",
      iconBg: "#EC994B",
      img : step1,
    },
    {
      title: "Vulnerability Assessment",
      block:
        "In this stage, we run vulnerability scanners to look for common vulnerabilities and possible vulnerabilities related to the platform.",
      blockBg: "#fff",
      icon: mdiShieldBugOutline,
      iconTitle: "Vulnerability Assessment",
      iconBg: "#FF5B22",
      img : step2,
    },
    {
      title: "Penetration Testing",
      block:
        "Here, we run exploits on the application to gauge its security. We use custom scripts & in-house tools to attain a high degree of penetration.",
      blockBg: "#fff",
      icon: mdiCubeScan,
      iconTitle: "Penetration Testing",
      iconBg: "#378CE7",
      img : step3,
    },
    {
      title: "Reporting & Discussion",
      block:
        "Generate the reports of vulnerabilities discovered alongside discussion on type of vulnerability, its impact and threat level and their impact scenario with the client developers.",
      blockBg: "#fff",
      icon: mdiChartBoxMultiple,
      iconTitle: "Penetration Testing",
      iconBg: "#4CCD99",
      img : step4,
    },
    {
      title: "Security Remediation",
      block:
        "Our laboratory team works closely with your developers and IT personnel to implement essential fixes and enhancements and fortify your digital assets.",
      blockBg: "#fff",
      icon: mdiSecurity,
      iconTitle: "Penetration Testing",
      iconBg: "#67C6E3",
      img : step5,
    },
    {
      title: "Post-Remediation Validation",
      block:
        "In this final step, we re-evaluate the applications security posture to ensure potential threats are addressed effectively, providing you with a fortified and secure digital environment.",
      blockBg: "#fff",
      icon: mdiGoogleAssistant,
      iconTitle: "Penetration Testing",
      iconBg: "#A9A9A9",
      img : step6,
    },
  ];
  return (
    <div>
      <HeadSection head={headSection1} />
      <Timeline timeline={timelineInfo} />
    </div>
  );
}
