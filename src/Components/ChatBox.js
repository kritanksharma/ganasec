import React from "react";
import Icon from "@mdi/react";
import { mdiClipboardAccountOutline, mdiOpenInNew } from "@mdi/js";
export default function ChatBox(props) {
  return (
    props.chatState && (
      <div className="toast chatbox" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <span>
            <Icon path={mdiClipboardAccountOutline} size={1} />
          </span>
          <strong className="me-auto">GANASEC Team</strong>
          <button type="button" class="btn-close" onClick={props.closeChatbox}></button>
        </div>
        <div className="toast-body">
          <p className="text-start">Hello !</p>
          <p className="text-start">
            Looking for the fastest and most affordable Pentest in the market? We're here to help
            you
          </p>
          <p className="text-start">
            <u>
              <a href="/">
                <span className="active-color">Explore More</span>
                <span>
                  <Icon className="p-1 active-color" path={mdiOpenInNew} size={1} />
                </span>
              </a>
            </u>
          </p>
        </div>
      </div>
    )
  );
}
