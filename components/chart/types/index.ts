export type ChartData = {
  label: string;
  value: number;
  originalValue?: number;
};

export type PieChartProps = {
  values: number[];
  labels: TypeEnergySource[];
  cleanEnergyPercent: number;
};

export type TypeEnergySource =
  | "wind"
  | "solar"
  | "nuclear"
  | "hydro"
  | "biomass"
  | "gas"
  | "coal"
  | "imports"
  | "other";

export type TypeSeries = {
  cleanEnergyPercent: number;
  labels: TypeEnergySource[];
  values: number[];
};
