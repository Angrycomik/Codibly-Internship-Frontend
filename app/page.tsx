"use client";

import { useEffect, useState } from "react";
import Calculator from "../components/calculator";
import { TypeEnergySource } from "../components/chart/types";
import PieChartWithTitle from "../components/chart/PieChartWithTItle";
import { CircularProgress } from "@mui/material";

type TypeMix = { fuel: TypeEnergySource; perc: number };
type TypeApiResponse = {
  cleanEnergyPercent: number;
  day: string;
  mix: TypeMix[];
};

export default function Home() {
  const [data, setData] = useState<TypeApiResponse[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://codibly-internship-backend.onrender.com/api/energy")
      .then((res) => res.json())
      .then((resData: TypeApiResponse[]) => {
        setData(resData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center gap-2">
        <CircularProgress />

        <span className="text-xl font-medium">Loading data...<br/>This might take up to a minute. </span>
      </div>
    );
  }

  if (!data) return <div className="text-red-500">Failed to load data</div>;

  return (
    <div className="flex flex-col items-center gap-11 py-10">
      <h1 className="text-2xl font-bold">Codibly Internship Task - made by Serhii Vynohradov</h1>

      <div className="flex flex-wrap justify-center gap-10">
        {data.map((day, i) => (
          <PieChartWithTitle
            loading={loading}
            key={i}
            dateString={day.day}
            mix={day.mix}
            cleanEnergyPercent={day.cleanEnergyPercent}
          />
        ))}
      </div>

      <Calculator />
    </div>
  );
}
