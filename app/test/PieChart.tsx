"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  values: number[];
  labels: string[];
  totalPercent: number;
}

const good = ["wind", "nuclear", "hydro", "solar", "gas", "biomass"];

export default function PieChart({ values, labels, totalPercent }: Props) {
  const backgroundColors = labels.map((label) => {
    if (good.includes(label)) {
      return "#3bff96";
    } else return "#ff693b";
  });

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <div style={{ width: "500px", height: "500px" }} className="relative">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        Clean energy
        <br /> percent, %: {totalPercent}
      </div>
      <Doughnut
        data={chartData}
        options={{
          cutout: "25%",
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
