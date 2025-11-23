import { DefaultizedPieValueType, PieSeries } from "@mui/x-charts";
import { ringData } from "./ring";
import { fuelData } from "./fuelData";
import { TypeSeries, ChartData } from "../types";

export const series = ({
  cleanEnergyPercent,
  labels,
  values,
}: TypeSeries): PieSeries[] => [
  {
    innerRadius: 60,
    outerRadius: 95,
    data: ringData(cleanEnergyPercent),
    arcLabel: (item: DefaultizedPieValueType) => {
      return `${item.value.toFixed(2)}%`;
    },
    highlightScope: { fade: "global", highlight: "item" },
    highlighted: { additionalRadius: 2 },
    cornerRadius: 3,
  },
  {
    innerRadius: 95,
    outerRadius: 120,
    data: fuelData(labels, values),
    valueFormatter: (value, context) => {
      const realValue = fuelData(labels, values)[context.dataIndex].originalValue;
      return `${realValue ?? value}%`;
    },
    arcLabel: (item: DefaultizedPieValueType) => {
      const dataItem = item as ChartData;
      const displayValue = dataItem.originalValue ?? item.value;
      return `${item.label} ${displayValue.toFixed(2)}%`;
    },
    arcLabelRadius: 140,
    highlightScope: { fade: "global", highlight: "item" },
    highlighted: { additionalRadius: 2 },
    cornerRadius: 3,
  },
];
