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
          <ArrowBackIcon sx={{ color: "#595959" }} />
          <Typography variant="body1" sx={{ color: "#595959" }}>
            Go back
          </Typography>
        </Link>
      </Stack>
      <Typography variant="h4" sx={{ color: "#38852D" }}>
        Users
      </Typography>

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
                    <PersonOutlineIcon
                      fontSize="small"
                      sx={{ mr: 0.5, color: "#38852D" }}
                    />
                    <Typography sx={{ mr: 0.5, color: "#38852D" }}>
                      Name:
                    </Typography>
                    <Typography sx={{ color: "#595959" }}>
                      {userName}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      my: "4px",
                      alignItems: "center",
                    }}
                  >
                    <HikingIcon
                      fontSize="small"
                      sx={{ mr: 0.5, color: "#38852D" }}
                    />
                    <Typography sx={{ mr: 0.5, color: "#38852D" }}>
                      Number of steps:
                    </Typography>
                    <Typography sx={{ color: "#595959" }}>{steps}</Typography>
                  </Stack>
                  <Stack
                    sx={{
                      my: "4px",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <AccessTimeIcon
                      fontSize="small"
                      sx={{ mr: 0.5, color: "#38852D" }}
                    />
                    <Typography sx={{ mr: 0.5, color: "#38852D" }}>
                      Timestamp:
                    </Typography>
                    <Typography sx={{ color: "#595959" }}>{date}</Typography>
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
