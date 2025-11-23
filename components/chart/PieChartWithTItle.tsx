"use client";

import ClientPieChart from "./ClientPieChart";
import Skeleton from "@mui/material/Skeleton";
import { TypeEnergySource } from "./types";

type TypeMix = { fuel: string; perc: number };

type Props = {
  dateString: string;
  mix: TypeMix[];
  cleanEnergyPercent: number;
  loading?: boolean;
};

export default function PieChartWithTitle({
  dateString,
  mix,
  cleanEnergyPercent,
  loading = false,
}: Props) {
  const date = new Date(dateString);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-medium mb-2">
        {date.toLocaleDateString("en-UK", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </h2>

      <div className="w-[470px] h-[450px] flex items-center justify-center">
        {loading ? (
          <Skeleton variant="rectangular" width={470} height={450} />
        ) : (
          <ClientPieChart
            values={mix.map((item) => item.perc)}
            labels={mix.map((item) => item.fuel) as TypeEnergySource[]}
            cleanEnergyPercent={cleanEnergyPercent}
          />
        )}
      </div>
    </div>
  );
}
