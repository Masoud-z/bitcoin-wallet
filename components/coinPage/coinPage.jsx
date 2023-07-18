"use client";
import CoinPriceDetail from "../coinPriceDetail/CoinPriceDetail";
import PriceChart from "../priceChart/PriceCahrt";
import styles from "./CoinPage.module.css";

function CoinPage() {
  const coin = {
    img: "/bit.png",
    name: "Bitcoin",
    title: "BTC",
    amount: 3.52902,
    price: 19.153,
    change: -2.32,
  };
  return (
    <div className={styles.container}>
      <CoinPriceDetail
        img={coin.img}
        name={coin.name}
        title={coin.title}
        amount={coin.amount}
        price={coin.price}
        change={coin.change}
      />
      <PriceChart title="BTC" current={5.483} lower={4.895} higher={6.857} />
    </div>
  );
}

export default CoinPage;
