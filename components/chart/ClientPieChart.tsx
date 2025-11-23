"use client";

import dynamic from "next/dynamic";
import { PieChartProps } from "./types";

const EnergyPieChart = dynamic(() => import("."), {
  ssr: false,
});

export default function ClientPieChart(props: PieChartProps) {
  return <EnergyPieChart {...props} />;
}
