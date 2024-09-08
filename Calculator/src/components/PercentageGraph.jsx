import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PercentageGraph() {
  const percentage = 66;
  return (
    <>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </>
  );
}
