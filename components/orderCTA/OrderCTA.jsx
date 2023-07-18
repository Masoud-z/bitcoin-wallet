import styles from "./orderCTA.module.css";

function OrderCTA({ title }) {
  return (
    <div className={styles.container}>
      <div className="container">
        <div>$</div>
        Buy {title}
      </div>
      <div className="container">
        <div className={styles.sell}>$</div>
        Sell {title}
      </div>
    </div>
  );
}

export default OrderCTA;
