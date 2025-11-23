import PieChart from "../components/PieChart";
import { TypeEnergySource } from "@/components/types";

type TypeMix = { fuel: TypeEnergySource; perc: number };

type TypeApiResponse = {
  cleanEnergyPercent: number;
  day: string;
  mix: TypeMix[];
};

export default async function Home() {
  const data = await fetch(
    "https://codibly-internship-backend.onrender.com/api/energy",
    { cache: "no-store" }
  ).then((res) => res.json());

  const date = data.map((item: TypeApiResponse) => new Date(item.day));

  return (
    <div className="flex flex-col items-center gap-11 py-10">
      <h1 className="text-2xl font-bold">Energy Mix</h1>

      <div className="flex flex-wrap justify-center gap-10">
        {data.map((day: TypeApiResponse, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">
              {date[i].toLocaleDateString("en-UK", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </h2>

            <PieChart
              values={day.mix.map((item: TypeMix) => item.perc)}
              labels={day.mix.map((item: TypeMix) => item.fuel)}
              cleanEnergyPercent={day.cleanEnergyPercent}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
