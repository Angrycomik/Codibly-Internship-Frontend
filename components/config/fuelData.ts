import { ChartData, TypeEnergySource } from "../types";

const fuelColors = {
  wind: "#D5EDFF",
  solar: "#FFEE58",
  nuclear: "#9575CD",
  hydro: "#2389DA",
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
    .map((label, i) => {
      const v = values[i];
      const visualValue = v > 0 && v < 0.5 ? 0.5 : v;

      return {
        id: label,
        label: label,
        value: visualValue,       
        originalValue: values[i], 
        color: fuelColors[label] ?? "#90caf9",
      };
    })
    .filter((item) => item.value > 0);
