import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PercentageGraph({ rating }) {
  const roundedRating =
    rating % 10 >= 5
      ? Math.ceil(rating / 10) * 10
      : Math.floor(rating / 10) * 10;
  return (
    <>
      <div className="row" style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={roundedRating}
          text={`${roundedRating}%`}
          styles={buildStyles({
            pathColor: "green",
            textWrap: "wrap",
            textSize: "27px",
            textColor: "green",
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
    </>
  );
}
