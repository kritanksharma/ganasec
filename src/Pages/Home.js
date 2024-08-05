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
import blogImage from "../Static/blockquote.svg";
import { mdiBookArrowRight, mdiArrowRight, mdiCheckCircle, mdiQrcodeScan } from "@mdi/js";
import ActionableReports from "../Components/ActionableReports";
import Certifications from "../Components/Certifications";
import MediumBlogs from "../Components/MediumBlogs";

export default function Home() {
  const headSection1 = {
    textCaption: "Secure Your Future: ",
    textCaptionHighlight: "Simplified Offensive Security Solutions",
    staticText: "Stay Ahead of Threats,",
    highlightText: "Innovate with Confidence.",
    textUpperCase: false,
    btnOptions: true,
    textAlign: "start",
    content:
      "Flexible, cost-effective penetration testing to help you achieve compliance and secure all your assets & stress free sprint releases.",
    cardbg1: cardbg1,
    height: "65vh",
  };
  const bodySection1 = {
    img: line,
    title: "Offensive Security across your entire Attack Surface !",
    block1:
      "Proactively safeguard your assets with our trusted community of experts, helping you defend at scale. We test, validate, and assist in patching vulnerabilities. Enjoy flexible engagement options tailored to your needs .",
    pointIcon: mdiCheckCircle,
    points: [
      "Flexible & On-Demand Pentests",
      "Detailed Technical and Executive Reports",
      "Support for Developers During Remediation",
      "Unlimited Retesting",
    ],
    btn: {
      btnIcon: mdiQrcodeScan,
      btnName: "Download Brocheure",
      btnUrl: "/blog",
    },
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
      "Detailed Technical Report & Proof of Concepts for the remediation",
      "Detailed Executive Report according to compliance & needs",
      "Insights for Developer Remediation",
      "Get a Verifiable certificate",
    ],
  };
  const blogsSection = {
    badge: "Latest Posts",
    title: "Stay on top of industry news and trends",
    description:
      "We have been making offensive cybersecurity blogs and would love to share our knowledge with you!",
    image: blogImage,
    linkIcon: mdiArrowRight,
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
      <MediumBlogs blogs={blogsSection} blogLimit="3" isShortPreview={true}></MediumBlogs>
    </div>
  );
}
