import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "area-chart",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10px",
        borderRadius: 5,
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
          fontWeight: "normal",
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
      data: [90, 110, 70, 140, 60, 150, 140],
    },
    {
      name: "Series2",
      data: [30, 60, 10, 55, 20, 70, 50],
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
