import React from "react";
import "./SocialIcon.css";

function SocialIcon({ Icon, to }) {
  return (
    <a href={to} target="_blank" className="social-icon">
      <Icon />
    </a>
  );
}

export default SocialIcon;
