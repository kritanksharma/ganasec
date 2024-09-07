import React from "react";
import HeadSection from "../Components/HeadSection";
import cardbg1 from "../Static/cardbg1.jpg";
import TeamSection from "../Components/TeamSection";
import team from "../Static/user-scan.svg";
import BodySection1 from "../Components/BodySection1";
import { mdiCheckCircle, mdiCubeScan } from "@mdi/js";
import bugs from "../Static/bugs.png";
export default function About() {
  const headSection1 = {
    textCaption: "Next-Gen Penetration Testing for",
    textCaptionHighlight: " Modern Security",
    staticText: "Combining Elite Expertise and AI for Thorough, High-Accuracy Testing",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "220px",
    btnOptions: false,
    content:
      "At GanaSec Cyber Solutions, weʼre revolutionizing cybersecurity with a unique approach. We blend the skills of top bug bounty hunters with advanced AI to provide precise and thorough penetration testing. Our expert team ensures you get reliable results with minimal false positives, so you can focus on running your business confidently knowing your security is in expert hands.",
    cardbg1: cardbg1,
  };
  const teamSection1 = {
    badge: "Our leaders ",
    title: "Founders",
    titleHighlight: "Story",
    subtitle: "Learn more about Gana Sec's founders",
    description0:
      "At GanaSec, our founders, Ashish K and Subhajit Saha, bring a wealth of experience and passion to the table. Both are seasoned bug bounty hunters and security engineers who know the field inside and out.",
    description1:
      " specializes in vulnerability detection, with extensive experience in identifying and addressing security flaws. His expertise was honed through his work at Microsoft, where he played a critical role in safeguarding their systems. ",
    description2:
      " has a strong background in building security programs for startups and unicorns like BlockFi and Klar. His experience includes leading security initiatives and collaborating with top tech companies. Subhajit also served as a Triager for BlockFi's HackerOne Program, where he helped manage and resolve security vulnerabilities.",
    description3:
      " is a Product Security Analyst - Triager at HackerOne, where he evaluates vulnerability reports, collaborates with hackers to gather crucial information, and creates detailed technical summaries with remediation advice. His role ensures clear and efficient communication between hackers and customers. As a HackerOne Brand Ambassador, Udit organizes community events, shares knowledge, and actively engages with the hacker community. Additionally, his membership in the Synack Red Team further enhances his expertise in vulnerability research. Udit's skills in vulnerability assessment, project management, and community engagement have made him a valuable asset to GanaSec",

    description4: "",

    storyLink: "",
    leaders: [
      {
        name: "Ashish K",
        photo: team,
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/ashish-kunwar",
        twitter: "",
      },
      {
        name: "Subhajit Saha",
        photo: team,
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/subhajitsaha0x/",
        twitter: "",
      },
      {
        name: "Udit Pratap Singh",
        photo: team,
        role: "Advisor",
        linkedin: "https://www.linkedin.com/in/udit-thakkur",
        twitter: "https://x.com/udit_thakkur?lang=en",
      },
    ],
  };

  const bodySection1 = {
    img: bugs,
    title: "Weʼve helped discover and act on over vulnerabilities!",
    block1:
      "GanaSec safeguards your business with a customized cybersecurity strategy. Our experts conduct thorough threat assessments and utilize cutting-edge intrusion detection to seamlessly align with your organization's security needs. We continuously innovate to ensure your data's integrity and business continuity through proactive monitoring and rapid response to any incidents. With GanaSec's holistic cybersecurity approach, you can focus on growth, knowing your digital realm has a steadfast guardian.",
    pointIcon: mdiCheckCircle,
    points: ["Cybersecurity risk score", "Resources for remediation", "Remediation report included"],
    btn: {
      btnIcon: mdiCubeScan,
      btnName: "Penetration Testing",
      btnUrl: "/penetration",
    },
  };
  return (
    <div>
      <HeadSection head={headSection1} />
      <TeamSection teams={teamSection1} />
      <BodySection1 body={bodySection1} />
    </div>
  );
}
