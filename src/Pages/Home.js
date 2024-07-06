import React from "react";
import BodySection1 from "../Components/BodySection1";
import cardbg2 from "../Static/main1.png";
import cardbg3 from "../Static/main2.svg";
import BodySection2 from "../Components/BodySection2";
import cardbg1 from "../Static/bg2.png";
import HeadSection2 from "../Components/HeadSection2";

export default function Home() {
  const headSection1 = {
    textCaption: "Secure Your Future: ",
    textCaptionHighlight: "Simplified Cybersecurity Solutions",
    staticText: "Trusted Security Operations.",
    highlightText: "Fearless Innovation.",
    textUpperCase: false,
    btnOptions: true,
    textAlign: "start",
    content:
      "Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety. Join us , where security challenges transform into growth opportunities. Experience the fastest, most affordable solutions for compliance and year-round asset security.",
    cardbg1: cardbg1,
  };
  const bodySection1 = {
    img1: cardbg2,
    title1: "Empower Your Business through Enhanced Cybersecurity Excellence! ",
    block11:
      "Unlock your businesss full potential with a fortified cybersecurity stance. Our comprehensive solutions and strategic insights enable confident navigation of the digital landscape. Strengthen defenses, safeguard data, and ensure seamless operations for heightened cyber resilience. Take charge of your digital destiny, fostering growth with a robust cybersecurity foundation.",
    block12:
      "At GANA SEC, our mission is to revolutionize cybersecurity by providing accessible, comprehensive solutions that empower organizations to protect their digital assets with confidence. We strive to simplify the complex landscape of cybersecurity, making it practical, affordable, and effective for businesses of all sizes. With our commitment to innovation and accessibility, we are reshaping the cybersecurity industry, ensuring that every organization, regardless of size, can navigate the digital realm securely and confidently.",

    img2: cardbg3,
    title2: "Everything you need to be secure, and stay that way! ",
    block21:
      "From robust threat assessments to cutting-edge intrusion detection, our Hackcura team delivers a tailored approach that aligns seamlessly with your organization security goals. We provide proactive monitoring, rapid incident response, and continuous innovation, assuring your data integrity and business continuity. With a holistic view of cybersecurity under our roof, you can focus on growth, knowing you have a steadfast guardian for your digital realm.",
  };
  const bodySection2 = {
    title: "You are in Good Hands , We are proud early risers !!",
    block1: { text: "VULNERABILITIES SUBMITTED", value: "50" },
    block2: { text: "ACTIVE MONTHLY ENGAGEMENTS", value: "20" },
    block3: { text: "FLEXIBLE PENTESTS WITHIN 24 HRS", value: "24" },
  };
  return (
    <div>
      <HeadSection2 head={headSection1} />
      <BodySection1 body={bodySection1} />
      <BodySection2 body={bodySection2} />
    </div>
  );
}
