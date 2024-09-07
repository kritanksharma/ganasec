import React from "react";
import Icon from "@mdi/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Timeline(props) {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <VerticalTimeline>
        {props.timeline &&
          props.timeline.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work text-start icon"
              contentStyle={{ background: "#fff", color: "#222222" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              iconStyle={{ background: element.iconBg, color: "#fff" }}
              icon={<Icon path={element.icon} size={1} title={element.iconTitle} />}
            >
              <div className="text">
                <img src={element.img} className="img-fluid rounded-start my-3" alt="..." width="300" height="200" />
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <p>{element.block}</p>
              </div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
}
