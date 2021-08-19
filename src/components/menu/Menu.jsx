// Passing props

import styles from "./Menu.module.scss";
import React from "react";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const classes = menuOpen ? [styles.menu, styles.active] : [styles.menu];

  const handleClick = () => setMenuOpen(false);

  return (
    <div className={classes.join(" ")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#intro">Top</a>
        </li>
        <li onClick={handleClick}>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li onClick={handleClick}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={handleClick}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Get In Touch</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
