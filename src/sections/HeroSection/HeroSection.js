import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./HeroSection.scss";
import landingPerson from "../../assets/lottie/femaleAvatar.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../utils/portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function HeroSection() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="CONTACT ME" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    download="Ayesha_Topiwala_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="DOWNLOAD MY RESUME" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="girl developer"
                src={require("../../assets/images/girlDeveloper.png")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
