import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    document.body.className = "dark"; // 🔥 ALWAYS DARK
  }, []);

  return (
    <>
      <Navbar />   {/* toggle props remove */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
