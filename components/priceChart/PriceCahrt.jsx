"use client";
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
  ReferenceDot,
  ComposedChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";

import styles from "./PriceChart.module.css";
import { useEffect, useState } from "react";

const CustomReferenceDot = (props) => {
  return (
    <circle cx={props.cx} r="2" cy={props.cy} fill="#ff8f17">
      <animate
        attributeName="r"
        from="2"
        to="5"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  );
};

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

function PriceChart({ title, current, lower, higher }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`container ${styles.chartContainer}`}>
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

      {show && (
        <div className={styles.chart}>
          <ResponsiveContainer
            width="100%"
            height={150}
            margin={{
              top: 20,
              right: 20,
              bottom: 0,
              left: 0,
            }}
          >
            <AreaChart data={data} syncId="anyId">
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff8f17" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff8f17" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip />
              <XAxis dataKey="name" />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#ff8f17"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <ReferenceDot
                x={data[data.length - 1].name}
                y={data[data.length - 1].pv}
                shape={CustomReferenceDot}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={styles.livePriceContainer}>
            <FontAwesomeIcon icon={faCircle} className={styles.liveDot} />1{" "}
            {title} = ${current}
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceChart;
