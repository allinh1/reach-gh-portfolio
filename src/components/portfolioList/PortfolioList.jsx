import React from 'react';
import styles from './portfolioList.module.scss';

const PortfolioList = ({id, title, active, setSelected}) => {


    return (
        
            // <li className={styles.portfolioList}>
            //     {title}
            // </li>

            <li
                className={active ? 
                    `${styles.portfolioList} ${styles.active}` : `${styles.portfolioList}`}
                    onClick={() => setSelected(id)}
                >
                {title}
            </li>
    )
}

export default PortfolioList



// import "./portfolioList.scss";

// export default function PortfolioList({ id, title, active, setSelected }) {
//   return (
//     <li
//       className={active ? "portfolioList active" : "portfolioList"}
//       onClick={() => setSelected(id)}
//     >
//       {title}
//     </li>
//   );
// }

