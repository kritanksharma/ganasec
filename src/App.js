import './App.css'
import React, { useState} from "react";
import Icon from "@mdi/react";
import { mdiForumOutline} from "@mdi/js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/TopBar";
import FooterSection1 from './Components/FooterSection1';
import ChatBox from './Components/ChatBox';
import Home from './Pages/Home';
import "./Components/styles.css"; // Import the CSS file
import About from './Pages/About';

function App() {
  const footerSection = {
    title :'GanaSec Cyber Solutions', 
    block : 'Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety. Join us , where security challenges transform into growth opportunities. Experience the fastest, most affordable solutions for compliance and year-round asset security.', 
    address : '3RD FLOOR, B.S TOWER, ZOO ROAD TINIALI, AMBIKAGIRINAGAR, GUWAHATI, ASSAM 781024' , 
    email : 'SALES@GANASEC.COM' , 
    number : '0000-000-0000'
        

  }
  const [chatboxState, setChatboxState] = useState(false);
  const chatboxHandler = ()=>{
    setChatboxState(!chatboxState);
  }
  return (
    <div className="App">
       <Router>
         <TopBar/>
         <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         </Routes>
         <FooterSection1 footer={footerSection}/>
       </Router>

 
   <ChatBox chatState={chatboxState} closeChatbox={chatboxHandler}/>
   <button className="btn btn-primary mx-2 light-color chatboxbtn btn-custom" onClick={chatboxHandler}> 
    <Icon path={mdiForumOutline} size={1}/>
    </button>
    
    </div>
  );
}

export default App;
