import { ChartData, TypeEnergySource } from "../types";

const fuelColors = {
  wind: "#4FC3F7",
  solar: "#FFEE58",
  nuclear: "#9575CD",
  hydro: "#4DB6AC",
  biomass: "#8D6E63",

  gas: "#FF8A65",
  coal: "#A1887F",
  imports: "#90A4AE",
  other: "#BDBDBD",
};

export const fuelData: (
  labels: TypeEnergySource[],
  values: number[]
) => ChartData[] = (labels, values) =>
  labels
    .map((label, i) => ({
      id: label,
      label: label,
      value: values[i],
      color: fuelColors[label] ?? "#90caf9",
    }))
    .filter((item) => item.value > 0);
