import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PercentageGraph({ rating }) {
  return (
    <>
      <div className="row" style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={rating}
          text={`${rating}%`}
          styles={buildStyles({
            pathColor: "green",
            textSize: "20px",
            textColor: "green",
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
    </>
  );
}
