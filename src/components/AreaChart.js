import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "column-chart",
      toolbar: {
        show: true,
        tools: {
          zoom: false,
          zoomin: false,
          zoomout: false,
          download: false,
          pan: false,
          reset: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
      categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
      axisTicks: { show: false },
      labels: {
        offsetY: 6,
        style: {
          colors: "#A3AED0",
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "Helvetica",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 180,
      tickAmount: 2,
      show: false,
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
      lineCap: "round",
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    legend: { show: false },
    grid: { show: false },
    colors: ["#4318FF", "#6AD2FF"],
  };

  const series = [
    {
      name: "Series1",
      data: [90, 95, 85, 108, 83, 115, 110],
    },
    {
      name: "Series2",
      data: [50, 70, 40, 70, 60, 70, 67],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="area"
            width="600"
            height="250"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
