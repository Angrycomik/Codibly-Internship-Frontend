import { TextField } from "@mui/material";
import { TypeSubmitButtonProps } from "./types";
import { inputConfig } from "./config/input";

type InputProps = Omit<TypeSubmitButtonProps, "setData"> & {
  setHours: (hours: number | string) => void;
};

const Input = ({ error, setError, hours, setHours }: InputProps) => {
  return (
    <TextField
      {...inputConfig}
      value={hours}
      error={!!error}
      helperText={error || ""}
      onChange={(e) => {
        const raw = e.target.value;

        if (/^\d*$/.test(raw)) {
          setHours(raw);

          const value = Number(raw);
          if (raw === "" || value < 1 || value > 6) {
            setError("Please enter a number between 1 and 6.");
          } else {
            setError("");
          }
        }
      }}
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
          pattern: "[0-9]*",
        },
      }}
    />
  );
};

export default Input;