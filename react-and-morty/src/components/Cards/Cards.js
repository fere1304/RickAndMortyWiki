import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";
import css from "./Cards.module.css";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((index) => {
      let { id, name, image, species, status } = index;
      return (
        <Link
        style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={`${css.cards} ${css.shadow}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "20px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6  mb-3">Species: {species}</div>
            </div>
          </div>
          {status === "Dead" ? (
            <div
              className={`${styles.badge} position-absolute badge bg-danger`}
            >
              {status}
            </div>
          ) : status === "Alive" ? (
            <div
              className={`${styles.badge} position-absolute badge bg-success`}
            >
              {status}
            </div>
          ) : (
            <div
              className={`${styles.badge} position-absolute badge bg-secondary`}
            >
              {status}
            </div>
          )}
        </Link>
      );
    });
  } else {
    display = "No charachers Found :/";
  }

  return <>{display}</>;
};

export default Cards;
