import React from "react";
import "./TeamCards.css";

function TeamCards({ img }) {
  return (
    <div className="team-card">
      <div className="team-img">
        <img src={img} alt="" />
      </div>
      <div className="team-card-content text-center">
        <p className="dark-blue fs-30px weight-6 teko ">@Dwane_John</p>
        <p className="gray fs-18px weight-5">the leader</p>
      </div>
    </div>
  );
}

export default TeamCards;
