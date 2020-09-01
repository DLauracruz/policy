import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

import "./Charts.scss";

export const Charts2 = () => {
  const [opcion, setOpcion] = useState(false);

  const month = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 45, 80, 67, 54, 27, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const week = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div id="Charts">
      <ul>
        <li
          className={opcion ? "selected" : ""}
          onClick={() => setOpcion(true)}
        >
          Week
        </li>
        <li
          className={!opcion ? "selected" : ""}
          onClick={() => setOpcion(false)}
        >
          Month
        </li>
      </ul>
      {opcion ? (
        <Bar
          data={week}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
          legend={{ labels: false }}
        />
      ) : (
        <Bar
          data={month}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
          legend={{ labels: false }}
        />
      )}
    </div>
  );
};
