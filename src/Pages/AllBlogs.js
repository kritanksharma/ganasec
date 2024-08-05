import React from "react";
import MediumBlogs from "../Components/MediumBlogs";
import blogImage from "../Static/blockquote.svg";
import { mdiArrowRight } from "@mdi/js";

export default function AllBlogs() {
  const blogsSection = {
    badge: "Latest Posts",
    title: "Stay on top of industry news and trends",
    description:
      "We have been making offensive cybersecurity blogs and would love to share our knowledge with you!",
    image: blogImage,
    linkIcon: mdiArrowRight,
  };
  return (
    <div>
      <MediumBlogs blogs={blogsSection} blogLimit="6" />
    </div>
  );
}
