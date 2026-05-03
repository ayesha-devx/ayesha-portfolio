/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "../assets/lottie/splashAnimation.json";
import programmingCode from "../assets/lottie/Programming Code.json";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayesha Topiwala",
  title: "Hi all, I'm Ayesha",
  subTitle: emoji(
    "Enthusiastic Computer Engineering student and Full Stack Web Developer based in Mumbai, India. Specialized in building responsive user interfaces and scalable backend systems using React.js and Django."
  ),
  resumeLink: "/resume.pdf", // Pointing to public/resume.pdf for direct download
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ayesha-devx",
  linkedin: "https://www.linkedin.com/in/ayesha-topiwala-b70a20369",
  gmail: "ayesha111206@gmail.com",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "FULL STACK WEB DEVELOPER PASSIONATE ABOUT MODERN WEB TECHNOLOGIES",
  animation: programmingCode,
  skills: [
    emoji(
      "⚡ Building responsive frontend interfaces using React.js, Tailwind CSS, and TypeScript"
    ),
    emoji("⚡ Developing scalable backend systems using Django"),
    emoji(
      "⚡ Integration of REST APIs, Authentication, and CRUD operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "devicon-canva-plain"
    },
    {
        skillName: "Figma",
        fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Don Bosco Institute of Technology, Mumbai",
      logo: require("../assets/images/collegeLogo.png"), // Placeholder logo
      subHeader: "B.E. Computer Engineering",
      duration: "2025 - 2028",
      desc: "Currently pursuing a Bachelor's degree in Computer Engineering.",
      descBullets: []
    },
    {
      schoolName: "Diploma in Computer Engineering",
      logo: require("../assets/images/collegeLogo.png"), // Placeholder logo
      subHeader: "Diploma in Computer Engineering",
      duration: "2022 - 2025",
      desc: "Completed Diploma with a score of 91.83%.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, Tailwind CSS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend - Django",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend - Node.js (Basic)",
      progressPercentage: "45%"
    },
    {
      Stack: "Tools (Git, GitHub, Canva, Figma, Vite)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Intern",
      company: "Accennovate, Mumbai",
      companylogo: require("../assets/images/companyLogo.png"), // Placeholder
      date: "Jun 2024 – Jul 2024",
      desc: "",
      descBullets: [
        "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap, improving UI consistency across devices",
        "Built and integrated dynamic e-commerce modules with backend connectivity, enhancing user interaction and functionality",
        "Collaborated in a team environment to debug, test, and optimize features, improving code quality and reducing errors",
        "Implemented clean UI components and reusable code structures, improving development efficiency"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false // Using custom projects section
};

// Featured projects
const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT WORK",
  projects: [
    {
      image: require("../assets/images/stressShield.png"),
      projectName: "StressShield – AI Wellness & Stress Management System",
      featured: false,
      projectDesc: "AI-powered platform to analyze stress levels and provide recommendations. Featuring a real-time chatbot using REST APIs, diagnostic quizzes, and a wellness dashboard.",
      techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://stressshield-an-ai-based-therapy.onrender.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/ayesha-devx/StressShield-An-AI-Based-Therapy-Assistant"
        }
      ]
    },
    {
      image: require("../assets/images/lazy-genius-hero.png"),
      projectName: "Lazy Genius AI – Empowering Technical Thought Leaders with AI",
      projectDesc: "A premium, AI-augmented MERN platform for technical blogging. Features AI-powered drafting, voice-enabled reading, PDF export, and automated smart cover generation.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://ai-for-lazy-genius.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/ayesha-devx/ai-for-lazy-genius"
        }
      ]
    },
    {
      image: require("../assets/images/eduNexus.png"),
      projectName: "EduNexus – Smart Student Management System",
      projectDesc: "Role-based system with authentication and access control. Includes modules for attendance tracking, course management, and feedback system.",
      techStack: ["Django", "Python", "SQLite", "HTML", "CSS"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://edunexus-smart-student-management-system-n5o4.onrender.com"
        },
        {
          name: "GitHub",
          url: "https://github.com/ayesha-devx/EduNexus_smart-student-management-system"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle: "Selected achievements and certifications from my academic journey.",
  achievementsCards: [
      {
        title: "Web Development Project Competition",
        subtitle: "First Prize at M.H. Saboo Siddik for project excellence.",
        image: require("../assets/images/award.png"),
        imageAlt: "Award Icon",
        footerLink: []
      },
      {
          title: "Internship in Problem Solving",
          subtitle: "Certification in C++ (OOP focus).",
          image: require("../assets/images/cert.png"),
          imageAlt: "Certification Icon",
          footerLink: []
      }
  ],
  display: false
};

const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Open to internships and opportunities. Let's build something impactful together.",
  number: "+91-8108729039",
  email_address: "ayesha111206@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
