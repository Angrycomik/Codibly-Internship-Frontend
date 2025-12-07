import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-2">
      <CircularProgress />

      <span className="text-xl font-medium">
        Starting server... <br />
        This might take up to a minute.
      </span>
    </div>
  );
}
