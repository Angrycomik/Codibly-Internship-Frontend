import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PieChartWithTitle from "../components/chart/PieChartWithTitle";

jest.mock("../components/chart/ClientPieChart", () => (props: any) => (
  <div>Clean energy: {props.cleanEnergyPercent}%</div>
));

describe("Pie Chart test", () => {
  it("passes the correct data to the chart", () => {
    render(
      <PieChartWithTitle
        dateString="2025-01-01"
        mix={[]}
        cleanEnergyPercent={100}
      />
    );

    expect(screen.getByText("Clean energy: 100%")).toBeInTheDocument();
    expect(screen.getByText(/January 2025/i)).toBeInTheDocument();
  });

  it("shows loading while getting the data", () => {
    render(
      <PieChartWithTitle
        dateString="2025-01-01"
        mix={[]}
        cleanEnergyPercent={100}
        loading={true}
      />
    );

    expect(screen.queryByText(/Clean energy/i)).not.toBeInTheDocument();
  });
});