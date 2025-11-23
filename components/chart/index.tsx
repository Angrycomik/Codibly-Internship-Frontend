"use client";

import {
  PieChart as MuiPieChart,
  pieArcLabelClasses,
} from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import PieChartCenterLabel from "./PieChartCenterLabel";
import { series } from "./config/series";
import { PieChartProps } from "./types";

export default function EnergyPieChart({
  values,
  labels,
  cleanEnergyPercent,
}: PieChartProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f6",
        borderRadius: "8px",
        gap: "20px",
        boxShadow: "8px 8px 9px -6px rgba(159, 164, 223, 1)",
      }}
    >
      <MuiPieChart
        height={450}
        width={470}
        series={series({
          cleanEnergyPercent,
          labels,
          values,
        })}
        hideLegend
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontSize: "13px",
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
