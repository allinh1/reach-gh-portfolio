import styles from "./Menu.module.scss"
import React from 'react'

const Menu = ({menuOpen , setMenuOpen}) => {

    const classes = menuOpen
        ? [styles.menu, styles.active]
        : [styles.menu]

    return (
        <div className={classes.join(" ")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)} >
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Porfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Menu
