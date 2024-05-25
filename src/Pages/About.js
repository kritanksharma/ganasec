import React from "react";
import HeadSection from "../Components/HeadSection";
import cardbg1 from "../Static/cardbg1.jpg";
import TeamSection from "../Components/TeamSection";
import team1 from "../Static/team1.jpeg";
import team2 from "../Static/team2.jpeg";
import team3 from "../Static/team3.jpeg";
import step6 from '../Static/work-step/Post-Remediation.svg';
import BodySection1 from "../Components/BodySection1";
export default function About() {
  const headSection1 = {
    textCaption: "Who are ",
    textCaptionHighlight: "  We ?",
    staticText: "Disrupting the penetration testing industry",
    textOptions: false,
    textUpperCase: true,
    textAlign: "start",
    height: "450px",
    btnOptions: false,
    content:
      "Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety.",
    cardbg1: cardbg1,
  };
  const teamSection1 = {
    d1: {
      name: "Udit Bhaduria",
      photo: team1,
      linkedin: "https://www.linkedin.com/in/udit-thakkur/",
      twitter: "https://twitter.com/udit_thakkur",
    },
    d2: {
      name: "Ashish Kunwar",
      photo: team2,
      linkedin: "https://www.linkedin.com/in/ashish-kunwar-0ab509194",
      twitter: "https://twitter.com/d0rkerdevil",
    },
    d3: {
      name: "Udit Bhaduria",
      photo: team3,
      linkedin: "https://www.linkedin.com/in/udit-thakkur/",
      twitter: "https://twitter.com/udit_thakkur",
    },
  };
  const bodySection1 = {
    img2: step6,
    title2: "Everything you need to be secure, and stay that way! ",
    block21:
      "From robust threat assessments to cutting-edge intrusion detection, our Hackcura team delivers a tailored approach that aligns seamlessly with your organization security goals. We provide proactive monitoring, rapid incident response, and continuous innovation, assuring your data integrity and business continuity. With a holistic view of cybersecurity under our roof, you can focus on growth, knowing you have a steadfast guardian for your digital realm.",
    block22:
      "At GANA SEC, our mission is to revolutionize cybersecurity by providing accessible, comprehensive solutions that empower organizations to protect their digital assets with confidence. We strive to simplify the complex landscape of cybersecurity, making it practical, affordable, and effective for businesses of all sizes. With our commitment to innovation and accessibility, we are reshaping the cybersecurity industry, ensuring that every organization, regardless of size, can navigate the digital realm securely and confidently.",
  };
  return (
    <div>
      <HeadSection head={headSection1} />
      <TeamSection team={teamSection1} />
      <BodySection1 body={bodySection1} />
    </div>
  );
}
