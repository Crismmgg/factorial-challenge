export const setOrderBy = (date: Date, orderBy: "byDays" | "byHours" | "byMinutes") => {
  const newDate = new Date(date);

  switch (orderBy) {
    case "byDays":
      newDate.setHours(0, 0, 0, 0);
      const dateStrByDay = newDate.toISOString().slice(0, 10);
      return dateStrByDay;

    case "byHours":
      newDate.setMinutes(0, 0, 0);
      const dateStrByHour = newDate.toLocaleString();
      return dateStrByHour;

    case "byMinutes":
      newDate.setSeconds(0);
      const dateStrByMinute = newDate.toLocaleString();
      return dateStrByMinute;

    default:
      newDate.setHours(0, 0, 0, 0);
      const dateStrByDayDefault = newDate.toISOString().slice(0, 10);
      return dateStrByDayDefault;
  }
};
