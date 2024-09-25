import React from "react";

export default function RatingsList({ selectedRatings }) {
  return (
    <div
      style={{
        minHeight: "55px",
        paddingBottom: "5px",
        display: "flex",
        flexWrap: "wrap",
        width: "90%",
      }}
    >
      <ul
        style={{
          display: "flex",
          padding: 0,
          margin: 0,
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {selectedRatings.map((rating, index) => (
          <li
            key={index}
            style={{
              listStyleType: "none",
              cursor: "default",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#5cb85c",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {rating}%
          </li>
        ))}
      </ul>
    </div>
  );
}
