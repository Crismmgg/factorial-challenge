import React, { useState } from "react";
import Link from "next/link";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { DataProps, GraphData, UnitsOfTime } from "../../types/types";
import { getStepsByTime } from "../../components/dashboard/utils/getStepsByTime";
import {
  getAverageByDay,
  getTotalStepsAverage,
} from "../../components/dashboard/utils/getAverageByTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard({ data }: DataProps) {
  const [showGraphBy, setShowGraphBy] = useState<UnitsOfTime>("byDays");

  const dataSortedByDate = data.sort((a, b) =>
    a.date.toLocaleString().localeCompare(b.date.toLocaleString())
  );

  const stepsByTime = getStepsByTime(dataSortedByDate, showGraphBy);
  const graphData: GraphData[] = Object.entries(stepsByTime).map(([x, y]) => ({
    x,
    y,
  }));

  const averagesByDay = getAverageByDay(dataSortedByDate);

  const handleChange = (ev: SelectChangeEvent<UnitsOfTime>) => {
    setShowGraphBy(ev.target.value as UnitsOfTime);
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = graphData.map(({ x }) => x);

  const linearGraphData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: `Steps along time`,
        data: graphData.map(({ y }) => y),
        borderColor: "#7CDC6D",
        backgroundColor: "#7CDC6D",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <Stack
      spacing={3}
      sx={{
        p: 2,
        alignItems: "center",
        backgroundColor: "#FAFDF8",
        height: "100vh",
      }}
    >
      <Stack sx={{ width: "100%", alignItems: "flex-start" }}>
        <Link href={"/"} className="dashboard_goback">
          <ArrowBackIcon sx={{ color: "#595959" }} />
          <Typography variant="body1" sx={{ color: "#595959" }}>
            Go back
          </Typography>
        </Link>
      </Stack>
      <Typography variant="h4" sx={{ color: "#38852D" }}>
        Dashboard
      </Typography>
      <Stack sx={{ flexDirection: { xs: "columun", sm: "row" } }}>
        <Card sx={{ m: 3, p: 0 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Total users</Typography>
            <Typography sx={{ color: "#595959" }}>{data.length}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 3, p: 0 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Total steps</Typography>
            <Typography sx={{ color: "#595959" }}>
              {averagesByDay.stepsSum}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 3, p: 0 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Steps average</Typography>
            <Typography sx={{ color: "#595959" }}>
              {getTotalStepsAverage(showGraphBy, dataSortedByDate)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <FormControl fullWidth>
        <InputLabel id="selectByTime-label">Time</InputLabel>
        <Select
          labelId="selectByTime-label"
          id="select"
          value={showGraphBy}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"byDays"}>By Days</MenuItem>
          <MenuItem value={"byHours"}>By Hours</MenuItem>
          <MenuItem value={"byMinutes"}>By Minutes</MenuItem>
        </Select>
      </FormControl>

      <Line data={linearGraphData} options={options} />
    </Stack>
  );
}
