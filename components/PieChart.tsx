"use client";

import {
  PieChart as MuiPieChart,
  pieArcLabelClasses,
} from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { PieChartProps } from "@/components/types";
import PieChartCenterLabel from "./PieChartCenterLabel";
import { series } from "./config/series";

export default function EnergyPieChart({
  values,
  labels,
  cleanEnergyPercent,
}: PieChartProps) {
  return (
    <Box>
      <MuiPieChart
        height={350}
        width={350}
        series={series({
          cleanEnergyPercent,
          labels,
          values,
        })}
        hideLegend
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontSize: "11px",
          },
        }}
      >
        <PieChartCenterLabel>
          Clean energy: {cleanEnergyPercent}%
        </PieChartCenterLabel>
      </MuiPieChart>
    </Box>
  );
}
