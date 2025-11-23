import { useDrawingArea } from "@mui/x-charts";
import { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const StyledText = styled("text")(() => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

const PieChartCenterLabel = ({ children }: { children: ReactNode }) => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}
      sx={{ fontWeight: "500" }}
    >
      {children}
    </StyledText>
  );
};

export default PieChartCenterLabel;
