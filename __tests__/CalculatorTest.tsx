import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Calculator from "../components/calculator";

global.fetch = jest.fn();

describe("Calculator test", () => {
  it("renders the calculator correctly", () => {
    render(<Calculator />);

    expect(
      screen.getByText("Optimal Charging Window Calculator")
    ).toBeInTheDocument();
    expect(screen.getByText("Charging Duration")).toBeInTheDocument();

    expect(screen.getAllByText("1h")[0]).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Find optimal charging time/i })
    ).toBeInTheDocument();
  });

  it("fetches data correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        cleanEnergyPercent: 100,
        start: "2025-01-01T00:30:00.000Z",
        end: "2025-01-01T01:30:00.000Z",
      }),
    });

    render(<Calculator />);

    const button = screen.getByRole("button", {
      name: /Find optimal charging time/i,
    });
    fireEvent.click(button);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("window=1")
    );

    await waitFor(() => {
      expect(screen.getByText("100%")).toBeInTheDocument();
    });
  });

  it("returns error for empty data", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    render(<Calculator />);

    const button = screen.getByRole("button", {
      name: /Find optimal charging time/i,
    });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
    });
  });
});
