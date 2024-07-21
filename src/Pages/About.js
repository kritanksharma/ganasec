import React from "react";
import HeadSection from "../Components/HeadSection";
import cardbg1 from "../Static/cardbg1.jpg";
import TeamSection from "../Components/TeamSection";
import team from "../Static/user-scan.svg";
import BodySection1 from "../Components/BodySection1";
import { mdiCheckCircle } from "@mdi/js";
import line from "../Static/action-charts/lin2.png";
export default function About() {
  const headSection1 = {
    textCaption: "Who are ",
    textCaptionHighlight: "We?",
    staticText: "Disrupting the penetration testing industry.",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "300px",
    btnOptions: false,
    content:
      "Why GanaSec ? Because we combine passionate cybersecurity experts with a relentless mission to secure your digital world. Meet our team - the masterminds behind our innovative strategies. We're driven by a shared commitment to staying ahead of threats and empowering your business with unwavering security.",
    cardbg1: cardbg1,
  };
  const teamSection1 = {
    badge: "Our leaders ",
    title: " The Gana Sec ",
    titleHighlight: "Story",
    subtitle: "Learn more about Gana Sec's founders",
    description1: " seasoned security engineer with a proven track record in building robust application security programs for startups and unicorns like BlockFi and Klar. At Klar, he led AppSec program and strengthen security measures. His tenure at BlockFi offered deep insights into large-scale cyber defense operations. Additionally, Subhajit has collaborated with Google India and has apprenticed with various organizations, bringing a wealth of expertise to his role.",
    description2: " seasoned security researcher specializing in ASM and EASM management, as well as vulnerability analysis and research. His tenure at various companies has provided him with deep insights into research and management. Additionally, Ashish has been active in the Bug Bounty community for over 9 years, securing hundreds of organizations. His extensive experience and dedication bring a wealth of expertise to his role.",
    description3 : " seasoned security researcher specializing in ASM and EASM management, as well as vulnerability analysis and research. His tenure at various companies has provided him with deep insights into research and management. Additionally, Ashish has been active in the Bug Bounty community for over 9 years, securing hundreds of organizations. His extensive experience and dedication bring a wealth of expertise to his role.",
    storyLink: "",
    leaders: [
      {
        name: "Udit Pratap Singh",
        photo: team,
        role: "Advisor",
        linkedin: "",
        twitter: "",
      },
      {
        name: "Ashish K",
        photo: team,
        role: "Founder",
        linkedin: "",
        twitter: "",
      },
      {
        name: "Subhajit Saha",
        photo: team,
        role: "Founder",
        linkedin: "",
        twitter: "",
      },
    ],
  };

  const bodySection1 = {
    img: line,
    title: "Ready to up-level your offensive security? ",
    block1:
      "GanaSec safeguards your business with a customized cybersecurity strategy. Our experts conduct thorough threat assessments and utilize cutting-edge intrusion detection to seamlessly align with your organization's security needs. We continuously innovate to ensure your data's integrity and business continuity through proactive monitoring and rapid response to any incidents. With GanaSec's holistic cybersecurity approach, you can focus on growth, knowing your digital realm has a steadfast guardian.",
    pointIcon: mdiCheckCircle,
    points: [
      "Cybersecurity risk score",
      "Resources for remediation",
      "Remediation report included",
    ],
  };
  return (
    <div>
      <HeadSection head={headSection1} />
      <TeamSection teams={teamSection1} />
      <BodySection1 body={bodySection1} />
    </div>
  );
}
