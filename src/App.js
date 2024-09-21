import "./App.css";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiForumOutline } from "@mdi/js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/TopBar";
import FooterSection1 from "./Components/FooterSection1";
import ChatBox from "./Components/ChatBox";
import Home from "./Pages/Home";
import "./Components/styles.css"; // Import the CSS file
import About from "./Pages/About";
import Works from "./Pages/Works";
import ErrorPage from "./Pages/ErrorPage";
import InProgress from "./Pages/InProgress";
import Penetration from "./Pages/Penetration";
import Services from "./Pages/Services";
import AllBlogs from "./Pages/AllBlogs";

function App() {
  const footerSection = {
    title: "GanaSec Cyber Solutions",
    block:
      "We help businesses bridge the gap between Bug Bounty programs and in- house bug bounty hunters. Our pentest services provide critical findings at flexible, budget-friendly rates with continuous testing to ensure every release is secure.",
    address: "Guwahati, Assam 781024",
    email: "sales@ganasec.com",
    number: "",
    linkedin: "https://www.linkedin.com/company/ganaseclabs",
    twitter: "https://x.com/ganaseclabs",
    blog: "",
  };
  const [chatboxState, setChatboxState] = useState(false);
  const chatboxHandler = () => {
    setChatboxState(!chatboxState);
  };
  return (
    <div className="App" style={{ overflowX: "hidden", maxWidth: "100%" }}>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/engagement" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/penetration-tests" element={<Services />} />
          <Route path="/penetration" element={<Penetration />} />
          <Route path="/inprogress" element={<InProgress />} />
          <Route path="/blog" element={<AllBlogs />} />

          {/* Catch-all route for the error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <FooterSection1 footer={footerSection} />
      </Router>

      <ChatBox chatState={chatboxState} closeChatbox={chatboxHandler} />
      <button
        className="btn btn-primary mx-2 light-color chatboxbtn btn-custom"
        onClick={chatboxHandler}
      >
        <Icon path={mdiForumOutline} size={1} />
      </button>
    </div>
  );
}

export default App;
