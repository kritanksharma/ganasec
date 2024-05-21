import './App.css'
import React, { useState} from "react";
import TopBar from "./Components/TopBar";
import Icon from "@mdi/react";
import { mdiForumOutline} from "@mdi/js";
import ChatBox from './Components/ChatBox';
import "./Components/styles.css"; // Import the CSS file
import FooterSection1 from './Components/FooterSection1';
import HeadSection from './Components/HeadSection';
import BodySection1 from './Components/BodySection1';
import cardbg2 from "../src/static/cardbg2.svg";
import cardbg3 from "../src/static/cardbg3.png";
import BodySection2 from './Components/BodySection2';
function App() {
  const bodySection1 = {
    img1: cardbg2,
    title1 : 'Empower your business with cybersecurity excellence! ',
    block11 : 'Unlock your businesss full potential with a fortified cybersecurity stance. Our comprehensive solutions and strategic insights enable confident navigation of the digital landscape. Strengthen defenses, safeguard data, and ensure seamless operations for heightened cyber resilience. Take charge of your digital destiny, fostering growth with a robust cybersecurity foundation.' , 
    block12 : 'At GANA SEC, our mission is to revolutionize cybersecurity by providing accessible, comprehensive solutions that empower organizations to protect their digital assets with confidence. We strive to simplify the complex landscape of cybersecurity, making it practical, affordable, and effective for businesses of all sizes. With our commitment to innovation and accessibility, we are reshaping the cybersecurity industry, ensuring that every organization, regardless of size, can navigate the digital realm securely and confidently.',

    img2: cardbg3,
    title2 : 'Everything you need to be secure, and stay that way! ',
    block21 : 'From robust threat assessments to cutting-edge intrusion detection, our Hackcura team delivers a tailored approach that aligns seamlessly with your organization security goals. We provide proactive monitoring, rapid incident response, and continuous innovation, assuring your data integrity and business continuity. With a holistic view of cybersecurity under our roof, you can focus on growth, knowing you have a steadfast guardian for your digital realm.' , 
  }
  const footerSection = {
    title :'GanaSec Cyber Solutions', 
    block : 'Simplifying cybersecurity precision. Our budget-friendly pen tests fortify your digital world, empowering business growth and safety. Join us , where security challenges transform into growth opportunities. Experience the fastest, most affordable solutions for compliance and year-round asset security.', 
    address : '3RD FLOOR, B.S TOWER, ZOO ROAD TINIALI, AMBIKAGIRINAGAR, GUWAHATI, ASSAM 781024' , 
    email : 'SALES@GANASEC.COM' , 
    number : '0000-000-0000'
        

  }
  const bodySection2 ={
    title : 'You are in Good Hands !' , 
    block1 : {text : 'VULNERABILITIES SUBMITTED' , value : '50'},
    block2:  {text : 'ACTIVE MONTHLY ENGAGEMENTS' , value : '20'},
    block3 : {text : 'FLEXIBLE PENTESTS WITHIN 24 HRS' , value : '24'},
  }
  const [chatboxState, setChatboxState] = useState(false);
  const chatboxHandler = ()=>{
    setChatboxState(!chatboxState);
  }
  return (
    <div className="App">
   <TopBar/>
   <HeadSection/>
   <BodySection1 body={bodySection1}/>
   <BodySection2 body={bodySection2}/>
   <FooterSection1 footer={footerSection}/>
   <ChatBox chatState={chatboxState} closeChatbox={chatboxHandler}/>
   <button className="btn btn-primary mx-2 light-color chatboxbtn btn-custom" onClick={chatboxHandler}> 
    <Icon path={mdiForumOutline} size={1}/>
    </button>
    
    </div>
  );
}

export default App;
