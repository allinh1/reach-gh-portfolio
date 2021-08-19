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
        "",
        link:""
      },
      {
        id: "2",
        title: "Calculator",
        desc:
          "Things about a calculator",
        link:
          "https://github.com/allinh1/calculator",
      },
      {
        id: "3",
        title: "Google Books API",
        desc:
          "Fetching Stuff",
          link:
        "https://github.com/allinh1/google-books-api",
      },
      {
        id: "4",
        title: "Ecom Store",
        desc:
          "E-commerce project w/ react + firebase",
        link:
        "https://github.com/allinh1/ecom-project",
      },
      {
        id: "5",
        title: "Morse Translator",
        desc:
          "A morse code translator which can convert plain text into encrypted form as morse code and also it can convert morse code back into plain text",
        link:
        "https://github.com/allinh1/morse-translator",
      },
    ];
  
    const handleClick = (slides) => { 
        slides === "nextSlide"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    // if(!Array.isArray(data) || data.length <= 0){
    //     return null;
    // }

    return (


        <div className={styles.projects} id="projects">
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
                    <span>{data.link}</span>
                  </div>
                </div>
                <div className={styles.right}>
                  <img
                    src=""
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

