import React from "react";
import "./TeamCards.css";

function TeamCards({ img, title, subtitle }) {
  return (
    <div className="team-card">
      <div className="team-img">
        <img src={img} alt="" />
      </div>
      <div className="team-card-content text-center">
        <p className="dark-blue fs-30px weight-6 teko ">{title}</p>
        <p className="gray fs-18px weight-5">{subtitle}</p>
      </div>
    </div>
  );
}

export default TeamCards;
