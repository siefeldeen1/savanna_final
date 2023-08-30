import React, { useState, useEffect } from "react";

const ProgressBar = ({ value, variant }) => {
  const [progress, setProgress] = useState(0);
  let width = "";
  let height = "";
  let radius_out = "";
  let radius_in = "";
  let background = "";
  let color ="";
  // let borderRadius = "";

  switch (variant) {
    case "md":
      width = "100%";
      height = "18px";
      radius_out = "4px";
      radius_in = "4px";
      // borderRadius ="8px";
      break;
      case "fs":
      width = "100%";
      height = "18px";
      radius_out = "4px";
      radius_in = "4px";
      background = "#C8C7C7";
      color = "#C8C7C7";
      break;
    default:
      width = "75%";
      height = "10px";
      radius_out = "10px";
      radius_in = "10px";
      color = "#F94144";
  }

  useEffect(() => {
    // Update the progress whenever the 'value' prop changes
    const calculatedProgress = (value / 100) * 100;
    setProgress(calculatedProgress);
  }, [value]);

  return (
    <div
      style={{
        width: width,
        height: height,
        // border: "1px solid #ccc",
        borderRadius: radius_out,
        backgroundColor: "#D9D9D9",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#FD6333",
          borderRadius: radius_in,
        }}
        data-in
      />
    </div>
  );
};

export default ProgressBar;
