"use client";

import { useState } from "react";
import { CalculatorApiResponse } from "./types";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import Date from "./Date";

export default function Calculator() {
  const [hours, setHours] = useState<number | string>("");
  const [data, setData] = useState<CalculatorApiResponse | null>(null);
  const [error, setError] = useState<string>("");

  return (
    <div className="flex flex-col gap-4 items-center mt-10 p-4 shadow-[8px_8px_9px_-6px_rgba(159,164,223,1)] bg-gray-100 rounded-md">
      <h2 className="text-xl font-medium">Optimal Charging Window Calculator</h2>

      <div className="flex flex-col gap-2 w-full items-center">
        <div className="flex gap-2">
          <Input
            error={error}
            setError={setError}
            setHours={setHours}
            hours={hours}
          />

          <SubmitButton
            error={error}
            setError={setError}
            setData={setData}
            hours={hours}
          />
        </div>

        {data && (
          <div className="w-full mt-4">
            <Date label="Start" date={data.start} />
            <Date label="End" date={data.end} />

            <p className="flex gap-3">
              <span className="font-medium">Сlean energy, %:</span>{" "}
              {data.cleanEnergyPercent}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
