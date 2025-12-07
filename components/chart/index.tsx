"use client";

import { Box } from "@mui/material";
import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart";
import PieChartCenterLabel from "./PieChartCenterLabel";
import { series } from "./config/series";
import { TypeEnergySource } from "./types";

export type TypeMix = { fuel: TypeEnergySource; perc: number };

export type PieChartData = {
  cleanEnergyPercent: number;
  weekDay: string;
  fullDate: string;
  mix: TypeMix[];
};

type Props = {
  data: PieChartData;
};

export default function PieChart({ data }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f6",
        borderRadius: "8px",
        gap: "20px",
        p: 3,
        width: 450,
      }}
    >
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold text-gray-800">{data.weekDay}</span>
        <h3 className="text-xl font-bold text-gray-800">{data.fullDate}</h3>
      </div>

      <MuiPieChart
        height={400}
        width={400}
        series={series({
          cleanEnergyPercent: data.cleanEnergyPercent,
          labels: data.mix.map((item) => item.fuel),
          values: data.mix.map((item) => item.perc),
        })}
        slotProps={{
          legend: {
            direction: "horizontal",
            position: { vertical: "bottom", horizontal: "center" },
            sx: {
              maxWidth: 300,
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 500,
            },
          },
        }}
      >
        <PieChartCenterLabel
          label="clean energy"
          value={data.cleanEnergyPercent}
        />
      </MuiPieChart>
    </Box>
  );
}
