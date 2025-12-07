const ChargingDuration = ({ hours }: { hours: number }) => {
  return (
    <div className="w-full">
      <p className="flex justify-between w-full mb-3 items-center font-semibold">
        <span>Charging Duration</span>
        <span className="py-1.5 px-5 rounded-4xl bg-[#d0fae5] text-[teal]">
          {hours}h
        </span>
      </p>
    </div>
  );
};

export default ChargingDuration;
