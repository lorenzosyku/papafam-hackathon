import React from "react";
import ReactApexChart from "react-apexcharts";

function Graph({amounts}) {
  const chart = {
    series: [
      {
        name: "Portfolio",
        data: amounts,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
    },
  };

  return (
    <div className="px-5">
      
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="area"
        height={350}
      />
    </div>
  );

}

export default Graph;
