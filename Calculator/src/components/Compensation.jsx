import React from "react";
import style from "../App.css";

export default function Compensation({ rating }) {
  const values = {
    10: 171.23,
    20: 338.49,
    30: 524.31,
    40: 755.28,
    50: 1075.16,
    60: 1361.88,
    70: 1716.28,
    80: 1995.01,
    90: 2241.91,
    100: 3737.85,
  };
  const monthlyComp = values[rating] || 0;

  return (
    <>
      <div className={style.compStyle}>
        <p>
          Monthly Compensation: <br />${monthlyComp.toFixed(2)}
        </p>
      </div>
    </>
  );
}
