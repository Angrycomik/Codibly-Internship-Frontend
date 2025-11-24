import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TextField from "@mui/material/TextField";
import { inputConfig } from "../components/calculator/config/input";
import Calculator from "@/components/calculator";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        cleanEnergyPercent: 100,
        start: "2025-01-01T00:30:00.000Z",
        end: "2025-01-01T01:00:00.000Z",
      }),
  })
) as jest.Mock;

describe("input and api call", () => {
  it("renders input", () => {
    render(<TextField {...inputConfig} />);
    expect(
      screen.getByLabelText("Input hours from 1 to 6")
    ).toBeInTheDocument();
  });


  it("gets data with correct input", async () => {
    render(<Calculator />);
    const input = screen.getByLabelText(/input hours/i);
    const button = screen.getByRole("button", { name: /get interval/i });

    fireEvent.change(input, { target: { value: "4" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Start:")).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalled();
  });


  it("returns error for empty data", () => {
    render(<Calculator />);
    const button = screen.getByRole("button", { name: /get interval/i });

    fireEvent.click(button);

    expect(screen.getByText("Please enter a number between 1 and 6.")).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("returns error for out of range number and disables button", () => {
    render(<Calculator />);
    const input = screen.getByLabelText(/input hours/i);

    fireEvent.change(input, { target: { value: "10" } });

    expect(screen.getByText("Please enter a number between 1 and 6.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get interval/i })).toBeDisabled();
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
