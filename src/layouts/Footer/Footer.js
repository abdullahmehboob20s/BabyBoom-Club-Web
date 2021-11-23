import "./Footer.css";
import Logo from "components/Logo/Logo";
import verifiedIcon from "assets/images/verified-icon.png";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import SocialIcon from "components/SocialIcon/SocialIcon";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container-wrapper py-100px">
        <div className="footer">
          <div className="mb-40px">
            <div
              className="text-center  margin-center"
              style={{ width: "278.1px" }}
            >
              <Logo />
            </div>
          </div>
          <p className="text-center fs-96px dark-blue weight-6 teko mb-30px">
            Join The Community
          </p>

          <div className="footer-links text-center mb-75px">
            <Link to="/" className="fs-24px weight-6 dark-blue footer-link">
              Home
            </Link>
            <Link to="/" className="fs-24px weight-6 dark-blue footer-link">
              About
            </Link>
            <Link to="/" className="fs-24px weight-6 dark-blue footer-link">
              Road Map
            </Link>
            <Link to="/" className="fs-24px weight-6 dark-blue footer-link">
              Team
            </Link>
            <Link to="/" className="fs-24px weight-6 dark-blue footer-link">
              FAQ
            </Link>
          </div>

          <div className="verified mb-50px">
            <img src={verifiedIcon} alt="" />
            <p className="fs-24px weight-5 dark-blue">Verified on etherscan</p>
          </div>

          <div className="social-links mb-70px">
            <SocialIcon to="https://instagram.com" Icon={FiInstagram} />
            <SocialIcon to="https://twitter.com" Icon={BsTwitter} />
            <SocialIcon to="https://discord.com" Icon={FaDiscord} />
          </div>

          <p className="text-center fs-16px weight-6 dark-blue">
            Copyright © 2021 <span className="pink">BabyBoom Club</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
