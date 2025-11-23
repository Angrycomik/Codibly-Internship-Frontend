import { TypeSubmitButtonProps } from "../types";

export const getOptimalWindow = async ({
  setError,
  setData,
  hours,
}: Omit<TypeSubmitButtonProps, "error">) => {
  const value = Number(hours);
  if (hours === "" || isNaN(value) || value < 1 || value > 6) {
    setError("Please enter a number between 1 and 6.");
    return;
  }

  setError("");
  const res = await fetch(
    `https://codibly-internship-backend.onrender.com/api/optimal-window?window=${value}`
  );
  setData(await res.json());
};
