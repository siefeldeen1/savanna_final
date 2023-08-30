import React , { useState, useEffect } from 'react'

    const distribution = ({ value, variant }) => {
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
            height = "16px";
            radius_out = "8px";
            radius_in = "8px";
            // borderRadius ="8px";
            break;
            case "fs":
            width = "97%";
            height = "18px";
            radius_out = "5px";
            radius_in = "5px";
            background = "#C8C7C7";
            color = "#C8C7C7";
            break;
          default:
            width = "300px";
            height = "10px";
            radius_out = "10px";
            radius_in = "10px";
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
                backgroundColor: "#C8C7C7",
                borderRadius: radius_out,
              }}
              data-in
            />
          </div>
        );
      };
export default distribution