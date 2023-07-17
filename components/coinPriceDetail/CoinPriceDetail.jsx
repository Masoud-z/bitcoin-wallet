import Image from "next/image";
import styles from "./CoinPriceDetail.module.css";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CoinPriceDetail({ img, name, title, amount, price, change }) {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.namInfo}>
        <div className={styles.name}>
          <Image src={img} width={30} height={30} alt="coin" />
          {name}
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <h1 className={styles.amount}>
        {amount} {title}
      </h1>
      <div className={styles.price}>
        ${price} USD
        <div className={`${styles.change} ${change < 0 && styles.minus}`}>
          {change}
        </div>
      </div>
      <div
        className={styles.show}
        onClick={() => setDetailOpen((prev) => !prev)}
      >
        {detailOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      <div className={styles.overalContainer}>
        <div
          className={`${styles.ordersContainer} ${
            !detailOpen && styles.detailOpen
          }`}
        >
          <div className={styles.orders}>
            <div className={styles.orderBtn}>Buy</div>
            <div className={styles.orderBtn}>Sell</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoinPriceDetail;
