import './App.css'
import React, { useState} from "react";
import TopBar from "./Components/TopBar";
import IntroInfo from './Components/IntroInfo'
import Icon from "@mdi/react";
import { mdiForumOutline} from "@mdi/js";
import ChatBox from './Components/ChatBox';
function App() {
  const [chatboxState, setChatboxState] = useState(false);
  const chatboxHandler = ()=>{
    setChatboxState(!chatboxState);
  }
  return (
    <div className="App">
   <TopBar/>
   <IntroInfo/>
   <ChatBox chatState={chatboxState} closeChatbox={chatboxHandler}/>
   <button className="btn btn-primary mx-2 light-color chatboxbtn" onClick={chatboxHandler}> 
    <Icon path={mdiForumOutline} size={1}/>
    </button>
    
    </div>
  );
}

export default App;
