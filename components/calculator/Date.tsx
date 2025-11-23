const Date = ({ label, date }: { label: "Start" | "End"; date: string }) => {
  return (
    <p className="flex gap-3">
      <span className="font-medium">{label}: </span>
      {new window.Date(date).toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
};

export default Date;
