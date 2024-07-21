import React from "react";
import BodySection1 from "../Components/BodySection1";
import chart1 from "../Static/action-charts/line.png";
import chart2 from "../Static/action-charts/pie.png";
import cardbg1 from "../Static/bg2.png";
import line from "../Static/action-charts/lin2.png";
import crest from "../Static/certificates/crest.jpg";
import ina from "../Static/certificates/ine.png";
import ec from "../Static/certificates/ec-council.png";
import HeadSection2 from "../Components/HeadSection2";
import blog from "../Static/blockquote.svg";
import { mdiBookArrowRight, mdiArrowRight, mdiCheckCircle } from "@mdi/js";
import ActionableReports from "../Components/ActionableReports";
import Certifications from "../Components/Certifications";
import Blogs from "../Components/Blogs";

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
    height: '65vh', 
  };
  const bodySection1 = {
    img: line,
    title: "Ready to up-level your offensive security? ",
    block1:
      "From robust threat assessments to cutting-edge intrusion detection, our GanaSec team delivers a tailored approach that aligns seamlessly with your organization security goals. We provide proactive monitoring, rapid incident response, and continuous innovation, assuring your data integrity and business continuity. With a holistic view of cybersecurity under our roof, you can focus on growth, knowing you have a steadfast guardian for your digital realm.",
    pointIcon: mdiCheckCircle,
    points: [
      "Cybersecurity risk score",
      "Resources for remediation",
      "Remediation report included",
    ],
  };
  const actionReports = {
    title: "Actionable Reporting",
    description:
      "Our pentest report format is easy to understand and will give you all the information you need to secure your environment. We’ll provide a customized plan of action to help you combat any vulnerabilities, prioritized based on severity, and improve your security posture.",
    btnName: "Example sample reports",
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
  const blogsSection = {
    badge:"Latest Posts" ,
    title: "Stay on top of industry news and trends",
    caption : "The latest thinking in offensive security !!",
    description:
      "We have been making offensive cybersecurity blogs and would love to share our knowledge with you!",
    list: [
      {
        title: "Blog Title 1",
        description:
          "Description of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: blog,
        linkURL: "https://your-blog-url-1.com",
        linkIcon: mdiArrowRight,
      },
      {
        title: "Blog Title 2",
        description:
          "Description of Blog 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: blog,
        linkURL: "https://your-blog-url-2.com",
        linkIcon: mdiArrowRight,
      },
      {
        title: "Blog Title 3",
        description:
          "Description of Blog 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: blog,
        linkURL: "https://your-blog-url-3.com",
        linkIcon: mdiArrowRight,
      },
    ],
  };
  const certificateSection = {
    title: "Pentesting and Security Certifications & Awards",
    description: "",
    list: [{ image: crest }, { image: ina }, { image: crest }, { image: ec }, { image: ina }],
  };

  return (
    <div>
      <HeadSection2 head={headSection1} />
      <BodySection1 body={bodySection1} />
      <ActionableReports reports={actionReports} />
      <Certifications certificates={certificateSection} />
      <Blogs blogs={blogsSection} />
    </div>
  );
}
