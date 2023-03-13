import { UnitsOfTime, User } from "../../../types/types";

export const getAverageByDay = (dataSortedByDate: User[]) => {
  let stepsSum = 0;
  let usersSum = 0;

  dataSortedByDate.forEach(({ steps }) => {
    stepsSum += parseInt(steps);
    usersSum++;
  });

  const totalStepsAverageByDay = stepsSum / usersSum;
  return { totalStepsAverageByDay, stepsSum, usersSum };
};

export const getTotalStepsAverage = (
  showGraphBy: UnitsOfTime,
  dataSortedByDate: User[]
) => {
  const averageByDay = getAverageByDay(dataSortedByDate).totalStepsAverageByDay;
  switch (showGraphBy) {
    case "byDays":
      return averageByDay;

    case "byHours":
      return Math.round(averageByDay / 24);

    case "byMinutes":
      return Math.round(averageByDay / 1440);
    default:
      return averageByDay;
  }
};
