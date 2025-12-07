"use client";

import { useState } from "react";
import { CalculatorApiResponse } from "./types";
import SubmitButton from "./SubmitButton";
import HoursSlider from "./Slider";
import ChargingDuration from "./ChargingDuration";
import ResultBox from "./ResultBox";
import { formatDateTime } from "./utils/formatDate";

export default function Calculator() {
  const [hours, setHours] = useState(1);
  const [data, setData] = useState<CalculatorApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleClick = async () => {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(
        `https://codibly-internship-backend.onrender.com/api/optimal-window?window=${hours}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const resData: CalculatorApiResponse = await res.json();
      setData(resData);
    } catch (err) {
      setError(`Error: ${(err as Error).message}`);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: Event, value: number) => {
    setHours(value as number);
    setError("");
  };

  return (
    <div className="flex flex-col gap-4 max-w-[700px] w-full items-center mt-10 p-8 rounded-3xl bg-white [box-shadow:0_10px_20px_rgba(16,185,129,0.4)]">
      <h2 className="text-xl font-medium">
        Optimal Charging Window Calculator
      </h2>

      <div className="flex flex-col gap-2 w-full">
        <ChargingDuration hours={hours} />

        <HoursSlider handleChange={handleChange} />

        <SubmitButton
          error={error}
          isLoading={isLoading}
          handleClick={handleClick}
        />

        {data && (
          <div className="mt-5 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
            <div className="flex gap-4 w-full h-[120px]">
              <ResultBox
                title="Clean energy"
                linearProgress
                linearProgressValue={data.cleanEnergyPercent}
              />

              <ResultBox title="Start time" date={formatDateTime(data.start)} />

              <ResultBox title="End time" date={formatDateTime(data.end)} />
            </div>
          </div>
        )}

        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  );
}
