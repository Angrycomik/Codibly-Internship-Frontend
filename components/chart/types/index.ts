export type ChartData = {
  label?: string;
  value: number;
  originalValue?: number;
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

export type TypeMix = { fuel: TypeEnergySource; perc: number };

export type PieChartData = {
  cleanEnergyPercent: number;
  weekDay: string;
  fullDate: string;
  mix: TypeMix[];
};
