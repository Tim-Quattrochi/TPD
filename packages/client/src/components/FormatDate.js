export const FormatDate = (deadline) => {
  deadline = "2023-02-02";
  const date = new Date(deadline);
  const formattedDeadline = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDeadline;
};
