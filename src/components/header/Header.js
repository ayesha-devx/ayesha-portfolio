import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  bigProjects,
  resumeSection
} from "../../utils/portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;
  const viewResume = resumeSection.display;

  const closeMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      menuBtn.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#greeting" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMenu}>Experience</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          {viewResume && (
            <li>
              <a href="#resume" onClick={closeMenu}>Resume</a>
            </li>
          )}
          <li className="nav-toggle">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
