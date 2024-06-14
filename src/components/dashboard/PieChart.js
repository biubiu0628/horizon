import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const series = [63, 25, 12];
  const total = series.reduce((acc, value) => acc + value, 0);
  const percent = series.map((value) => ((value / total) * 100).toFixed(1));
  const options = {
    labels: ["Your files", "System", "Empty"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  };

  return (
    <div className="app flex flex-col">
      <Chart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height={220}
      />
      <div
        id="legend"
        className="w-[300px] h-[75px] shadow place-self-center rounded-[15px] grid grid-cols-3 items-center px-2"
      >
        {options.labels.map((label, index) => (
          <div
            className={`flex flex-col items-center ${
              index !== options.labels.length - 1
                ? "border-r-[1px] border-[#F4F7FE]"
                : ""
            }`}
          >
            <p>
              <span
                style={{
                  backgroundColor: options.colors[index],
                  width: "10px",
                  height: "10px",
                  display: "inline-block",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></span>
              <span className="text-[12px] text-[#A3AED0]">{`${label}`}</span>
            </p>
            <span className="text-[18px] font-bold text-[#2B3674]">{`${percent[index]}%`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
