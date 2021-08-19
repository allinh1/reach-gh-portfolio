// usestate, useeffect, mapping data

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
        
        </div>
      </div>
  );
};

export default Portfolio;
