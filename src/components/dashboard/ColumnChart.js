import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "column-chart",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "20px",
        borderRadius: 10,
        borderRadiusApplication: "end",
      },
    },
    xaxis: {
      categories: [17, 18, 19, 20, 21, 22, 23, 24, 25],
      axisTicks: { show: false },
      labels: {
        offsetY: 6,
        style: {
          colors: "#A3AED0",
          fontSize: 15,
          fontWeight: "normal",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 2,
      show: false,
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { show: false },
    colors: ["#775ffc", "#84d9fd", "#e6edf9"],
  };

  const series = [
    {
      name: "Values1",
      data: [10, 9, 8, 10, 8, 8.8, 9, 8, 10],
    },
    {
      name: "Values2",
      data: [10, 9, 8, 10, 8, 8.8, 9, 8, 10],
    },
    {
      name: "Values3",
      data: [10, 9, 8, 10, 8, 8.8, 9, 8, 10],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="250"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
