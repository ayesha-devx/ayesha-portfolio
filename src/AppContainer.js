import React, {useEffect, useState} from "react";
import "./AppContainer.scss";

// Layout Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SplashScreen from "./components/SplashScreen/SplashScreen";

// Sections
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ProficiencySection from "./sections/ProficiencySection/ProficiencySection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import EducationSection from "./sections/EducationSection/EducationSection";
import AchievementSection from "./sections/AchievementSection/AchievementSection";
import ProfileSection from "./sections/ProfileSection/ProfileSection";

// Data & Context
import {splashScreen} from "./utils/portfolio";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

const AppContainer = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProficiencySection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <AchievementSection />
            <ProfileSection />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default AppContainer;
