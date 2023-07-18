import { useState } from "react";
import CoinPriceDetail from "@/components/coinPriceDetail/CoinPriceDetail";
import PriceChart from "@/components/priceChart/PriceChart";
import styles from "./CoinPageStyles.module.css";
import OrderCTA from "@/components/orderCTA/OrderCTA";

const coin = {
  img: "/bit.png",
  name: "Bitcoin",
  title: "BTC",
  amount: 3.52902,
  price: 19.153,
  change: -2.32,
};

const priceDetail = {
  Day: [
    { name: "We 12 Jul 23", price: 2.36 },
    { name: "Th 13 Jul 23", price: 4.87 },
    { name: "Fr 14 Jul 23", price: 3.12 },
    { name: "Sa 15 Jul 23", price: 1.95 },
    { name: "Su 16 Jul 23", price: 5.41 },
    { name: "Mo 17 Jul 23", price: 3.79 },
    { name: "Tu 18 Jul 23", price: 5.48 },
  ],
  Week: [
    { name: "Mo 5 Jun 23", price: 5.05 },
    { name: "Mo 12 Jun 23", price: 2.7 },
    { name: "Mo 19 Jun 23", price: 3.1 },
    { name: "Mo 26 Jun 23", price: 4.12 },
    { name: "Mo 3 Jul 23", price: 5.8 },
    { name: "Mo 10 Jul 23", price: 3.2 },
    { name: "Mo 17 Jul 23", price: 5.48 },
  ],
  Month: [
    { name: "Su 1 Jan 23", price: 5.05 },
    { name: "We 1 Feb 23", price: 3.7 },
    { name: "We 1 Mar 23", price: 5.1 },
    { name: "Sa 1 April 23", price: 2.12 },
    { name: "Mo 1 May 23", price: 3.8 },
    { name: "Th 1 Jun 23", price: 1.2 },
    { name: "Sa 1 Jul 23", price: 5.48 },
  ],
  Year: [
    { name: "Jan 17", price: 0.2 },
    { name: "Jan 18", price: 0.8 },
    { name: "Jan 19", price: 1.1 },
    { name: "Jan 20", price: 2.12 },
    { name: "Jan 21", price: 3.8 },
    { name: "Jan 22", price: 4.2 },
    { name: "Jan 23", price: 5.48 },
  ],
};

function CoinPage() {
  const [activePeriod, setActivePeriod] = useState("Week");
  const [priceData, SetPriceData] = useState(priceDetail[activePeriod]);

  const onChangePeriod = (period) => {
    if (activePeriod !== period) {
      setActivePeriod(period);
      SetPriceData(priceDetail[period]);
    }
  };
  return (
    <div className={`${styles.container}`}>
      <CoinPriceDetail
        img={coin.img}
        name={coin.name}
        title={coin.title}
        amount={coin.amount}
        price={coin.price}
        change={coin.change}
      />
      <div className={styles.period}>
        <div
          onClick={() => onChangePeriod("Day")}
          className={activePeriod === "Day" ? styles.active : ""}
        >
          Day
        </div>
        <div
          onClick={() => onChangePeriod("Week")}
          className={activePeriod === "Week" ? styles.active : ""}
        >
          Week
        </div>
        <div
          onClick={() => onChangePeriod("Month")}
          className={activePeriod === "Month" ? styles.active : ""}
        >
          Month
        </div>
        <div
          onClick={() => onChangePeriod("Year")}
          className={activePeriod === "Year" ? styles.active : ""}
        >
          Year
        </div>
      </div>
      <PriceChart
        title="BTC"
        current={5.483}
        lower={4.895}
        higher={6.857}
        priceData={priceData}
      />
      <OrderCTA title={coin.title} />
    </div>
  );
}

export default CoinPage;
