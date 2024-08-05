import React from "react";
import HeadSection from "../Components/HeadSection";
import cardbg1 from "../Static/cardbg1.jpg";
import TeamSection from "../Components/TeamSection";
import team from "../Static/user-scan.svg";
import BodySection1 from "../Components/BodySection1";
import { mdiCheckCircle  , mdiCubeScan} from "@mdi/js";
import line from "../Static/action-charts/lin2.png";
export default function About() {
  const headSection1 = {
    textCaption: "Next-Gen Penetration Testing for",
    textCaptionHighlight: " Modern Security",
    staticText: "Combining Elite Expertise and AI for Thorough, High-Accuracy Testing",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "300px",
    btnOptions: false,
    content: "At GanaSec Cyber Solutions, weʼre revolutionizing cybersecurity with a unique approach. We blend the skills of top bug bounty hunters with advanced AI to provide precise and thorough penetration testing. Our expert team ensures you get reliable results with minimal false positives, so you can focus on running your business confidently knowing your security is in expert hands.",
    cardbg1: cardbg1,
  };
  const teamSection1 = {
    badge: "Our leaders ",
    title: "Founders",
    titleHighlight: "Story",
    subtitle: "Learn more about Gana Sec's founders",
    description1: "At GanaSec, our founders, Ashish K and Subhajit Saha, bring a wealth of experience and passion to the table. Both are seasoned bug bounty hunters and security engineers who know the field inside and out." ,
    description2:
      " specializes in vulnerability detection, with a deep understanding of identifying and addressing security flaws. His expertise helps organizations secure their systems effectively",
    description3:
      " has a strong background in building security programs for startups and unicorns. His experience includes leading security initiatives and collaborating with top tech companies.",
    description4: " Together, theyʼve assembled a team of highly ranked hackers from the bug bounty community. By combining manual pentesting with advanced AI, GanaSec disrupts traditional approaches to deliver precise, actionable results and valuable insights, ensuring your business stays ahead of potential threats. We also offer flexible subscription plans to fit your needs, making high-quality security testing accessible and adaptable to your budget." ,
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
    title: "Weʼve helped discover and act on over vulnerabilities!",
    block1:
      "GanaSec safeguards your business with a customized cybersecurity strategy. Our experts conduct thorough threat assessments and utilize cutting-edge intrusion detection to seamlessly align with your organization's security needs. We continuously innovate to ensure your data's integrity and business continuity through proactive monitoring and rapid response to any incidents. With GanaSec's holistic cybersecurity approach, you can focus on growth, knowing your digital realm has a steadfast guardian.",
    pointIcon: mdiCheckCircle,
    points: [
      "Cybersecurity risk score",
      "Resources for remediation",
      "Remediation report included",
    ],
    btn : {
      btnIcon :mdiCubeScan , 
      btnName : "Penetration Testing", 
      btnUrl : "/penetration"
    }
  };
  return (
    <div>
      <HeadSection head={headSection1} />
      <TeamSection teams={teamSection1} />
      <BodySection1 body={bodySection1} />
    </div>
  );
}
