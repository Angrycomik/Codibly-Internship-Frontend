import { PieSeries } from "@mui/x-charts";
import { ringData } from "./ring";
import { fuelData } from "./fuelData";
import { TypeSeries } from "../types";

export const series = ({
  cleanEnergyPercent,
  labels,
  values,
}: TypeSeries): PieSeries[] => {
  const sortedData = fuelData(labels, values);

  return [
    {
      innerRadius: 75,
      outerRadius: 125,
      data: ringData(cleanEnergyPercent),
      valueFormatter: (item) => {
        const label = item.id === "clean" ? "Renewable" : "Non-renewable";
        return `${item.value.toFixed(2)}%`;
      },
      highlightScope: { fade: "global", highlight: "item" },
      highlighted: { additionalRadius: 2 },
      cornerRadius: 10,
    },
    {
      innerRadius: 130,
      outerRadius: 160,
      data: sortedData,
      valueFormatter: (value, context) => {
        const item = sortedData[context.dataIndex];
        return `${item.originalValue ?? item.value}%`;
      },
      highlightScope: { fade: "global", highlight: "item" },
      highlighted: { additionalRadius: 2 },
      cornerRadius: 10,
    },
  ];
};
