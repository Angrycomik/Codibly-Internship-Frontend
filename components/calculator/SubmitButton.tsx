import { Button } from "@mui/material";
import { getOptimalWindow } from "./api/getOptimalWindow";
import { TypeSubmitButtonProps } from "./types";

const SubmitButton = ({
  error,
  setError,
  setData,
  hours,
}: TypeSubmitButtonProps) => {
  return (
    <Button
      onClick={() => getOptimalWindow({ setError, setData, hours })}
      disabled={!!error}
      variant="contained"
      sx={{
        fontFamily: "var(--font-montserrat)",
      }}
    >
      Get interval
    </Button>
  );
};

export default SubmitButton;
