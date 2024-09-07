import React from "react";
import MediumBlogs from "../Components/MediumBlogs";
import blogImage from "../Static/blockquote.svg";
import cardbg1 from "../Static/cardbg1.jpg";
import { mdiArrowRight } from "@mdi/js";
import HeadSection from "../Components/HeadSection";

export default function AllBlogs() {
  const headSection1 = {
    textCaption: "",
    textCaptionHighlight: "Latest Posts",
    staticText: "Stay on top of industry news and trends !",
    textOptions: false,
    textUpperCase: false,
    textAlign: "start",
    height: "220px",
    btnOptions: false,
    content:
      "We have been making offensive cybersecurity blogs and would love to share our knowledge with you ",
    cardbg1: cardbg1,
  };
  const blogsSection = {
    badge: "Latest Posts",
    title: "Stay on top of industry news and trends",
    description: "We have been making offensive cybersecurity blogs and would love to share our knowledge with you!",
    image: blogImage,
    linkIcon: mdiArrowRight,
  };
  return (
    <div>
       <HeadSection head={headSection1} />
       <MediumBlogs blogs={blogsSection} blogLimit="6" />
    </div>
  );
}
