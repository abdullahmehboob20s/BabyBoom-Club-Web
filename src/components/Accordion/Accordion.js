import React from "react";
import "./Accordion.css";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Accordion({ title }) {
  const [show, setShow] = React.useState(false);
  const accordionBody = React.useRef();

  const handler = () => {
    setShow(!show);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-btn ${show ? "active" : ""}`}
        onClick={handler}
      >
        <p className=" teko fs-30px weight-4">{title}</p>{" "}
        <div className="acordion-header-icon">
          {show ? <BsDashLg /> : <AiOutlinePlus />}
        </div>
      </div>
      <div
        className="accordion-body"
        style={{
          height: show ? accordionBody?.current?.scrollHeight + "px" : 0,
        }}
        ref={accordionBody}
      >
        <div className="accordion-content">
          <p className="fs-18px weight-5 lh-26px">
            To sell your NFTs on a marketplace, you’ll need to locate them in
            your collection, click on them and find the “sell” button.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
