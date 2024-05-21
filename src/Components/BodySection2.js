import React, { useState } from "react";
import bg3 from "../static/bg3.png";
import CountUp from 'react-countup'; 
export default function BodySection2(props) {
  const [blockCount1, setBlockCount1] = useState(Number(props.body.block1.value));
  const [blockCount2, setBlockCount2] = useState(Number(props.body.block2.value));
  const [blockCount3, setBlockCount3] = useState(Number(props.body.block3.value));
  const timeVar = ">"
  const handleMouseEnter = () => {
    setBlockCount1(Number(props.body.block1.value)); 
    setBlockCount2(Number(props.body.block2.value)); 
    setBlockCount3(Number(props.body.block3.value)); 
  };

  const handleMouseLeave = () => {
    setBlockCount1(0); 
    setBlockCount2(0); 
    setBlockCount3(0); 

    setTimeout(() => {
      setBlockCount1(Number(props.body.block1.value));
      setBlockCount2(Number(props.body.block2.value));
      setBlockCount3(Number(props.body.block3.value));
    }, 100);
  };
  return (
    <div>
      <div
        className="card bg-black text-light"
        style={{
          border: "none",
          borderRadius: "0px",
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          opacity: 1,
        }}
      >
       <div className="card-body" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="text-light fs-2 fw-regular mt-2">
        {props.body.title}
      </p>
      <div className="row my-5 display-6 fw-regular">
        <div className="col-md-4">
          <p className="active-color display-3 fw-bold">
            <CountUp start={0} end={blockCount1} duration={3} /> +
          </p>
          <p className="fs-4">{props.body.block1.text}</p>
        </div>

        <div className="col-md-4">
          <p className="active-color display-3 fw-bold">
            <CountUp start={0} end={blockCount2} duration={3} /> +
          </p>
          <p className="fs-4">{props.body.block2.text}</p>
        </div>
        <div className="col-md-4">
          <p className="active-color display-3 fw-bold">
            <CountUp start={0} end={blockCount3} duration={3} /> {timeVar}
          </p>
          <p className="fs-4">{props.body.block3.text}</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
