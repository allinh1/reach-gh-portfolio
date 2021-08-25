import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSass,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faHtml5,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <h1> Skills </h1>
      <div className={styles.container}></div>

      <div className={styles.tech}>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faHtml5} className={styles.tech_html} />
          <div>Html</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faCss3} className={styles.tech_css}/>
          <div>css</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faSass} className={styles.tech_sass}/>
          <div>sass</div>
        </div>
        <div className={styles.circle} >
          <FontAwesomeIcon icon={faJs} />
          <div>JavaScript</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faGithub} className={styles.tech_git}/>
          <div>Git</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faReact} className={styles.tech_react}/>
          <div>React</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faDatabase} />
          <div>Firebase</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faBootstrap} className={styles.tech_bootstrap}/>
          <div>Bootstrap</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faLeaf} className={styles.tech_spring}/>
          <div>Spring</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faJava} />
          <div>Java</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faDatabase} />
          <div>MySQL</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
