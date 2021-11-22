import React from "react";
import logo from "assets/images/Logo.svg";
import LogoImg from "assets/images/Logo-img.svg";

function Logo() {
  return (
    <div>
      <img src={LogoImg} style={{ width: "100%" }} alt="" />
    </div>
  );
}

export default Logo;
