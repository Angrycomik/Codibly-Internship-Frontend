import { LinearProgress } from "@mui/material";

type Props = {
  title: string;
  linearProgress?: boolean;
  linearProgressValue?: number;
  date?: string;
};

const ResultBox = ({
  title,
  linearProgress = false,
  linearProgressValue,
  date,
}: Props) => (
  <div className="flex-1 bg-[#33ba9d] rounded-2xl p-4 flex flex-col justify-between">
    <h5 className="font-medium">{title}</h5>

    {linearProgress ? (
      <>
        <span className="text-[28px] font-semibold">
          {linearProgressValue}%
        </span>

        <LinearProgress
          variant="determinate"
          value={linearProgressValue}
          sx={{
            height: 8,
            borderRadius: 2,
            backgroundColor: "#71cebb",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "white",
            },
          }}
        />
      </>
    ) : (
      <span className="text-[20px] font-semibold">{date}</span>
    )}
  </div>
);

export default ResultBox;
