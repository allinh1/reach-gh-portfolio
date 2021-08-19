import { useState } from "react";

import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Intro from "./components/intro/Intro";
import styles from "./app.module.scss";
import React from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={styles.sections}>
        <Intro />
        <Portfolio />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
