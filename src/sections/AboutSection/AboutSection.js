import React, {useContext} from "react";
import "./AboutSection.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../utils/portfolio";

export default function AboutSection() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="about">
        <div className="about-main">
          <div className="about-text-div">
            <h1 className={isDark ? "dark-mode about-heading" : "about-heading"}>
              About Me
            </h1>
            <p className={isDark ? "dark-mode about-text" : "about-text"}>
              {greeting.subTitle}
            </p>
            <p className={isDark ? "dark-mode about-text" : "about-text"}>
              I am currently pursuing my <strong>B.E. in Computer Engineering</strong> at Don Bosco Institute of Technology. I am passionate about learning new technologies and applying them to solve real-world problems. My expertise lies in <strong>Full Stack Web Development</strong>, specifically with <strong>React.js</strong> and <strong>Django</strong>.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
