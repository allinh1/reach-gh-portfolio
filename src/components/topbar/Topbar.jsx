// import { useState } from "react";
import styles from "./Topbar.module.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
// import styles from "./Topbar.module.css";

const Topbar = ({menuOpen, setMenuOpen}) => {

    const classes = menuOpen
        ? [styles.topbar, styles.active]
        : [styles.topbar]

    return (
        <div className={classes.join(" ")}>

            <div className={styles.wrapper}>
                <div className={styles.left}>

                    <a href="#intro" className={styles.logo}>LOGO</a>
                    <div className={styles.itemContainer}>
                        <GitHubIcon className={styles.icon}/>
                        <span>allinh1</span>
                    </div>
                    <div className={styles.itemContainer}>
                        <MailIcon className={styles.icon} />
                        <span>test@test.com</span>
                    </div>
                </div>

                <div className={styles.right}>
                    {/* Toggle */}
                    <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={styles.line1}></span>
                        <span className={styles.line2}></span>
                        <span className={styles.line3}></span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Topbar
