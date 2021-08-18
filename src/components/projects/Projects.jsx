// usestate, slider, materialui, onclicks

import { useState } from "react";
import styles from "./Projects.module.scss";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        title: "Client Project",
        desc:
          "Stuff about the client project",
        img:
        "https://via.placeholder.com/200x150",
      },
      {
        id: "2",
        title: "Calculator",
        desc:
          "Things about a calculator",
        img:
          "https://via.placeholder.com/200x150",
      },
      {
        id: "3",
        title: "Google Books API",
        desc:
          "Fetching Stuff",
        img:
        "https://via.placeholder.com/200x150",
      },
    ];
  
    const handleClick = (slides) => { 
        slides === "nextSlide"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    // if(!Array.isArray(data) || data.length <= 0){
    //     return null;
    // }

    return (


        <div className={styles.projects} id="projects">Scrolling...
        <div
          className={styles.slider}
          style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
        >
          {data.map((data) => (
            <div className={styles.container}>
              <div className={styles.item}>
                <div className={styles.left}>
                  <div className={styles.leftContainer}>
                    {/* <div className={styles.imgContainer}>
                    </div> */}
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className={styles.right}>
                  <img
                    src="https://via.placeholder.com/200x200"
                    alt=""
                  /> 
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <ArrowBackIosIcon
            className={`${styles.left} ${styles.arrow}`}
            onClick={() => handleClick("nextSlide")}/>

        <ArrowForwardIosIcon
            className={`${styles.right} ${styles.arrow}`}
            onClick={() => handleClick()}/>
      </div>
        
    )
}

export default Projects

