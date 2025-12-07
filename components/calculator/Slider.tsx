import { Slider } from "@mui/material";

const min = 1;
const max = 6;
const step = 1;

const marks = Array.from({ length: max - min + 1 }, (_, i) => {
  const value = min + i * step;
  return { value, label: `${value}h` };
});

const HoursSlider = ({
  handleChange,
}: {
  handleChange: (e: Event, value: number) => void;
}) => {
  return (
    <Slider
      defaultValue={1}
      step={step}
      min={min}
      max={max}
      valueLabelDisplay="auto"
      onChange={handleChange}
      marks={marks}
      sx={{ color: "#10B981", height: 8 }}
    />
  );
};

export default HoursSlider;
