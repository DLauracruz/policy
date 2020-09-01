import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

import "./Charts.scss";

export const Charts = () => {
  const [opcion, setOpcion] = useState(0);

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
      <h3>Goals</h3>
      <ul>
        <li
          className={opcion === 0 ? "selected" : ""}
          onClick={() => setOpcion(0)}
        >
          Week
        </li>
        <li
          className={opcion === 1 ? "selected" : ""}
          onClick={() => setOpcion(1)}
        >
          Month
        </li>
        <li
          className={opcion === 2 ? "selected" : ""}
          onClick={() => setOpcion(2)}
        >
          Suspense
        </li>
      </ul>
      {opcion === 0 || opcion === 2 ? (
        <Bar
          data={week}
          options={{
            maintainAspectRatio: false,
          }}
          height={""}
          width={""}
          legend={{ labels: false }}
        />
      ) : (
        <Bar
          data={month}
          options={{
            maintainAspectRatio: false,
          }}
          height={""}
          width={""}
          legend={{ labels: false }}
        />
      )}
    </div>
  );
};
