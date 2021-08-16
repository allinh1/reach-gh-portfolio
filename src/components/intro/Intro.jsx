import styles from "./Intro.module.scss";

const Intro = () => {
    return (
        <div className={styles.intro} id="intro">
            <div className={styles.left}>                
                <div className={styles.imageContainer}>
                    <img src="" alt="" />
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h3> Hello , I'm</h3>
                    <h2> Allen Nguyen</h2>
                    <h3> Aspiring Junior Developer
                        <span></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
