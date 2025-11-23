export type CalculatorApiResponse = {
  cleanEnergyPercent: number;
  end: string;
  start: string;
};

export type TypeSubmitButtonProps = {
  setError: (error: string) => void;
  setData: (res: CalculatorApiResponse) => void;
  hours: string | number;
  error: string;
};
