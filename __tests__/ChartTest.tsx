import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import PieChart from "../components/chart";
import ChartsContainer from "../components/chart/ChartsContainer";

jest.mock("@mui/x-charts/PieChart", () => ({
  PieChart: ({ children }: any) => <div data-test="chart">{children}</div>,
}));

jest.mock("@mui/x-charts", () => ({
  useDrawingArea: () => ({ width: 100, height: 100, left: 0, top: 0 }),
}));

describe("PieChart tests", () => {
  it("renders date and energy value", () => {
    const mockData = {
      cleanEnergyPercent: 100,
      weekDay: "Saturday",
      fullDate: "6 December 2025",
      mix: [],
    };

    render(<PieChart data={mockData} />);

    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("6 December 2025")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
  
  const mockFetch = jest.fn();
  global.fetch = mockFetch;
  it("displays error message when empty data received", async () => {
    mockFetch.mockResolvedValue({
      json: async () => [],
    });

    render(<ChartsContainer />);

    await waitFor(() => {
      expect(screen.getByText("No data available")).toBeInTheDocument();
    });
  });
});
