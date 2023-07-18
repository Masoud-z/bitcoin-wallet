import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

import styles from "./PriceChart.module.css";

function PriceChart({ title, current, lower, higher }) {
  return (
    <div className="container">
      <div className={styles.priceContainer}>
        <div>
          <FontAwesomeIcon icon={faCircle} className={styles.lower} />
          Lower: ${lower}
        </div>
        <div>
          <FontAwesomeIcon icon={faCircle} className={styles.higher} />
          Higher: ${higher}
        </div>
      </div>

      <AreaChart width={300} height={150} data={data} syncId="anyId">
        <CartesianGrid strokeDasharray="3 3" />

        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="pv" stroke="#f5b22b" fill="#fbae15" />
      </AreaChart>
    </div>
  );
}

export default PriceChart;
