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
        columnWidth: "14px",
        borderRadius: 7,
        borderRadiusApplication: "end",
      },
    },
    xaxis: {
      categories: ["00", "04", "08", 12, 14, 16, 18],
      axisTicks: { show: false },
      labels: {
        offsetY: 6,
        style: {
          colors: "#B0BBD5",
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 2,
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shape: "light",
        type: "vertical",
        gradientToColors: ["#4318FF"],
        opacityFrom: 1,
        opacityTo: 0.28,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { show: false },
    colors: ["#4318FF"],
  };

  const series = [
    {
      name: "Values",
      data: [14, 10, 18, 12, 16, 20, 6],
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
            height="220"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
