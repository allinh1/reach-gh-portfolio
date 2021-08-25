import { useState, useEffect } from "react";
import styles from "./Topbar.module.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const classes = menuOpen ? [styles.topbar, styles.active] : [styles.topbar];

  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "test@test.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`${email} Copied to Clipboard`);
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`${email}`);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <div className={classes.join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro" className={styles.logo}>
            AN.
          </a>
          <div className={styles.itemContainer}>
            <GitHubIcon className={styles.icon} />
            <span>
              <a href="https://github.com/allinh1">allinh1</a>{" "}
            </span>
          </div>

          <div className={styles.itemContainer}>
            <MailIcon
              className={styles.icon}
              onClick={copyEmail}
              onMouseOver={showInstruction}
              onMouseOut={hideInstruction}
            />
            {copySuccessMessage} {instructions}
            <span></span>
          </div>
        </div>

        <div className={styles.right}>
          {/* Toggle */}
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
