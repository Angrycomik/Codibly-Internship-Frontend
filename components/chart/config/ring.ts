import { ChartData } from "../types";

export const ringData: (cleanEnergyPercent: number) => ChartData[] = (
  cleanEnergyPercent
) =>
  [
    {
      id: "clean",
      label: "Renewable",
      value: cleanEnergyPercent,
      color: "#73ff73",
    },
    {
      id: "non-clean",
      label: "Non-renewable",
      value: 100 - cleanEnergyPercent,
      color: "#FF4040",
    },
  ].filter((item) => item.value > 0);
