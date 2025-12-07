import { Button, CircularProgress } from "@mui/material";

type Props = {
  isLoading: boolean;
  error: string;
  handleClick: () => void;
};

const SubmitButton = ({ isLoading, error, handleClick }: Props) => {
  return (
    <Button
      onClick={handleClick}
      disabled={isLoading || !!error}
      variant="contained"
      sx={{
        fontFamily: "var(--font-montserrat)",
        bgcolor: "var(--color-emerald-500)",
        "&:hover": {
          bgcolor: "var(--color-emerald-600)",
        },
        padding: "14px 20px",
        borderRadius: "12px",
      }}
    >
      {isLoading ? (
        <CircularProgress size={24} sx={{ color: "#10B981" }} />
      ) : (
        "Find optimal charging time"
      )}
    </Button>
  );
};

export default SubmitButton;
