import React from "react";
import BarChart from "./charts/BarChart";
import { UserData } from "./Data";
import { useState } from "react";

const Metrics = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.courseName),
    datasets: [
      {
        label: "Progress",
        data: UserData.map((data) => data.progress),
        backgroundColor: ["blue"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Courses",
        },
      },
      y: {
        max: 100, // Set the maximum value for the y-axis
        beginAtZero: true, // Start the y-axis from zero
        ticks: {
          stepSize: 20, // Define the step size between ticks on the y-axis
        },
        title: {
          display: true,
          text: "Progress",
        },
      },
    },
  };

  return (
    <div>
      <h2>Metrics</h2>
      <h3>Course Completion Progress</h3>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} chartOptions={options} />
      </div>
    </div>
  );
};

export default Metrics;
