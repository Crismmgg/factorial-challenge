import { UnitsOfTime, User } from "../../../types/types";
import { setOrderBy } from "./setOrderBy";

export const getStepsByTime = (
  dataSortedByDate: User[],
  showGraphBy: UnitsOfTime
) => {
  const stepsByDate: { [date: string]: string[] } = {};

  dataSortedByDate.forEach(({ date, steps }) => {
    const datesByTime = setOrderBy(date, showGraphBy);

    if (datesByTime in stepsByDate) {
      stepsByDate[datesByTime].push(steps);
    } else {
      stepsByDate[datesByTime] = [steps];
    }
  });

  const stepsByTime: { [date: string]: number } = {};
  Object.entries(stepsByDate).forEach(([date, steps]) => {
    const stepsAsNumber = steps.map((step) => parseInt(step));
    const average =
      stepsAsNumber.reduce((total: number, s: number) => total + s, 0) /
      steps.length;
    stepsByTime[date] = Math.round(average);
  });

  return stepsByTime;
};
