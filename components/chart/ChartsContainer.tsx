"use client";

import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import PieChart, { PieChartData, TypeMix } from ".";

export type TypeApiResponse = {
  cleanEnergyPercent: number;
  day: string;
  mix: TypeMix[];
};

export default function ChartsContainer() {
  const [data, setData] = useState<PieChartData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://codibly-internship-backend.onrender.com/api/energy")
      .then((res) => res.json())
      .then((resData: TypeApiResponse[]) => {
        if (resData && resData.length > 0) {
          const chartData: PieChartData[] = resData.map((item) => {
            const d = new Date(item.day);
            return {
              ...item,
              weekDay: d.toLocaleDateString("en-UK", { weekday: "long" }),
              fullDate: d.toLocaleDateString("en-UK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            };
          });
          setData(chartData);
        } else {
          console.error("API returned empty data");
          setData([]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 w-full h-[400px] gap-1">
        <CircularProgress /> <span>Loading charts data...</span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-red-500">No data available</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {data.map((day, i) => (
        <PieChart key={i} data={day} />
      ))}
    </div>
  );
}
