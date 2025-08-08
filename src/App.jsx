import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";

const App = () => {
  const sectionRefs = useRef({
    home: null,
    skills: null,
    projects: null,
    profile: null,
  });

  const handleScroll = (key) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Router>
        <Header handleScroll={handleScroll} />
        <HeroSection sectionRef={(el) => (sectionRefs.current.home = el)} />
        <Skills sectionRef={(el) => (sectionRefs.current.skills = el)} />
        <Projects sectionRef={(el) => (sectionRefs.current.projects = el)} />
        <Profile sectionRef={(el) => (sectionRefs.current.profile = el)} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
