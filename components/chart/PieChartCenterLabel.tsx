import { useDrawingArea } from "@mui/x-charts";
import { styled } from "@mui/material/styles";

const StyledText = styled("text")(() => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

const PieChartCenterLabel = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  const { width, height, left, top } = useDrawingArea();
  const words = label.split(" ");
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  return (
    <StyledText x={centerX} y={centerY}>
      <tspan x={centerX} dy="-0.6em" fontSize={24} fontWeight={600}>
        {value}%
      </tspan>

      {words.map((word, index) => (
        <tspan
          key={index}
          x={centerX}
          dy={index === 0 ? "1.4em" : "0.8em"}
          fontSize={14}
        >
          {word}
        </tspan>
      ))}
    </StyledText>
  );
};

export default PieChartCenterLabel;
