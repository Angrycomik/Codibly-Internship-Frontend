import ChartsContainer from "@/components/chart/ChartsContainer";
import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-11 py-10">
      <h1 className="text-2xl font-bold">
        Codibly Internship Task - made by Serhii Vynohradov
      </h1>

      <ChartsContainer />

      <Calculator />
    </div>
  );
}
