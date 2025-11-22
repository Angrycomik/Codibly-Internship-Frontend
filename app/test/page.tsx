import PieChart from "./PieChart";

export default async function Test() {
  const data = await fetch(
    "https://codibly-internship-backend.onrender.com/api/energy",
    { cache: "no-store" }
  ).then((res) => res.json());

  console.log(data);

  return (
    <div className="flex flex-col items-center gap-11">
      <PieChart
        values={data[0].mix.map((item) => item.perc)}
        labels={data[0].mix.map((item) => item.fuel)}
        totalPercent={data[0].cleanEnergyPercent}
      />
      <PieChart
        values={data[1].mix.map((item) => item.perc)}
        labels={data[1].mix.map((item) => item.fuel)}
        totalPercent={data[1].cleanEnergyPercent}
      />
      <PieChart
        values={data[2].mix.map((item) => item.perc)}
        labels={data[2].mix.map((item) => item.fuel)}
        totalPercent={data[2].cleanEnergyPercent}
      />
    </div>
  );
}
