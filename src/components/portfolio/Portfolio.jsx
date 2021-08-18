import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list2 = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "client",
      title: "Client Project",
    },
    {
      id: "calculator",
      title: "Calculator",
    },
    {
      id: "ecom",
      title: "Ecommerce Shop",
    },
    {
      id: "books",
      title: "Books API",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "client":
        setData(webPortfolio);
        break;
      case "calculator":
        setData(mobilePortfolio);
        break;
      case "ecom":
        setData(designPortfolio);
        break;
      case "books":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <>
      <div className={styles.portfolio} id="portfolio">
        <h1>Portfolio</h1>

        <ul>
          {list2.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className={styles.container}>
          {data.map((item) => (
          <div className={styles.item}>
            <img
              src={item.img}
              alt=""
            />
            <h3>{item.title}</h3>
          </div>
        ))} 


          {/* <div className={styles.item}>
            <img src="https://via.placeholder.com/200x150" alt="" />
            <h3>Project</h3>
          </div>
          <div className={styles.item}>
            <img src="https://via.placeholder.com/200x150" alt="" />
            <h3>Project</h3>
          </div>
          <div className={styles.item}>
            <img src="https://via.placeholder.com/200x150" alt="" />
            <h3>Project</h3>
          </div>
          <div className={styles.item}>
            <img src="https://via.placeholder.com/200x150" alt="" />
            <h3>Project</h3>
          </div>
          <div className={styles.item}>
            <img src="https://via.placeholder.com/200x150" alt="" />
            <h3>Project</h3>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// import { useEffect, useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";
// import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";

// export default function Portfolio() {
//   const [selected, setSelected] = useState("featured");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     switch (selected) {
//       case "featured":
//         setData(featuredPortfolio);
//         break;
//       case "web":
//         setData(webPortfolio);
//         break;
//       case "mobile":
//         setData(mobilePortfolio);
//         break;
//       case "design":
//         setData(designPortfolio);
//         break;
//       case "content":
//         setData(contentPortfolio);
//         break;
//       default:
//         setData(featuredPortfolio);
//     }
//   }, [selected]);

//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>Portfolio</h1>
//       <ul>
//         {list.map((item) => (
//           <PortfolioList
//             title={item.title}
//             active={selected === item.id}
//             setSelected={setSelected}
//             id={item.id}
//           />
//         ))}
//       </ul>
//       <div className="container">
//         {data.map((d) => (
//           <div className="item">
//             <img
//               src={d.img}
//               alt=""
//             />
//             <h3>{d.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
