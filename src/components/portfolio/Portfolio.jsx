import styles from "./Portfolio.module.scss";

const Portfolio = () => {
    return (
        <div className={styles.portfolio} id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Client Project</li>
                <li>Calculator</li>
                <li>Ecommerce Shop</li>
                <li>Books API</li>
            </ul>
            
            <div className={styles.container}>
                <div className="item"></div>
                <img src="https://via.placeholder.com/150" alt="" />
                <h3>Project 1</h3>
            </div>


        </div>
    )
}

export default Portfolio
