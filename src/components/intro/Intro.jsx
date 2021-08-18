// Typing text

import styles from "./Intro.module.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";


const Intro = () => {

    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
            showCursor: true, 
            backDelay: 1500,
            strings: [' Developer',' Programmer', ' Engineer' ] })
    }, [])

    return (


        <div className={styles.intro} id="intro">

            <div className={styles.left}>                
                <div className={styles.imgContainer}>
                    <img src="https://image.freepik.com/free-photo/flat-lay-photo-office-desk-with-laptop-copy-space-background_1150-45598.jpg" alt=""></img>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2> "&lt &#60"  </h2>
                    <h1> Allen Nguyen</h1>
                    <h3> Aspiring Junior 
                             <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <ExpandMoreIcon style={{ fontSize: 100 }} />
                </a>
            </div>
        </div>
    )
}

export default Intro
