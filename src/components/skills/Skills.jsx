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
          <FontAwesomeIcon icon={faHtml5} />
          <div>Html</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faCss3} />
          <div>css</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faSass} />
          <div>sass</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faJs} />
          <div>JavaScript</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faGithub} />
          <div>Git</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faReact} />
          <div>React</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faDatabase} />
          <div>Firebase</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faBootstrap} />
          <div>Bootstrap</div>
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faLeaf} />
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
