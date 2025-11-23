import { TextFieldProps } from "@mui/material";

export const inputConfig: TextFieldProps = {
  label: "Input hours from 1 to 6",
  variant: "standard",
  type: "text",
  fullWidth: true,
  sx: {
    width: "270px",
    fontFamily: "var(--font-montserrat)",
    "& input": {
      fontFamily: "var(--font-montserrat)",
    },
    "& label": {
      fontFamily: "var(--font-montserrat)",
    },
  },
};
