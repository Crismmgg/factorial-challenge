import React from "react";
import Link from "next/link";

import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HikingIcon from "@mui/icons-material/Hiking";

import { DataProps } from "../../types/types";

export default function Users({ data }: DataProps) {
  return (
    <Stack
      flexWrap="wrap"
      spacing={2}
      sx={{
        p: 2,
        alignItems: "center",
        width: "100%",
        backgroundColor: "#FAFDF8",
      }}
    >
      <Stack sx={{ width: "100%", alignItems: "flex-start" }}>
        <Link href={"/"} className="dashboard_goback">
          <ArrowBackIcon />
          <Typography variant="body1">Go back</Typography>
        </Link>
      </Stack>
      <Typography variant="h4">Users</Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {data.map(({ userName, avatar, steps, date }) => {
          return (
            <Stack key={userName}>
              <Card
                sx={{
                  m: 2,
                  width: "fit-content",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Avatar variant="square" src={avatar} sx={{ mb: "8px" }} />
                  <Stack
                    direction="row"
                    sx={{
                      my: "4px",
                      alignItems: "center",
                    }}
                  >
                    <PersonOutlineIcon fontSize="small" />
                    <Typography>Name: {userName}</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      my: "4px",
                      alignItems: "center",
                    }}
                  >
                    <HikingIcon fontSize="small" />
                    <Typography>Number of steps: {steps}</Typography>
                  </Stack>
                  <Stack
                    sx={{
                      my: "4px",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <AccessTimeIcon fontSize="small" />
                    <Typography>Timestamp: {date}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
