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
      "Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety.",
    cardbg1: cardbg1,
  };
  const teamSection1 = {
    badge: "Our leaders ",
    title: " The Gana Sec ",
    titleHighlight: "Story",
    subtitle: "Learn more about Gana Sec's founders",
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    description2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      "From robust threat assessments to cutting-edge intrusion detection, our Hackcura team delivers a tailored approach that aligns seamlessly with your organization security goals. We provide proactive monitoring, rapid incident response, and continuous innovation, assuring your data integrity and business continuity. With a holistic view of cybersecurity under our roof, you can focus on growth, knowing you have a steadfast guardian for your digital realm.",
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
