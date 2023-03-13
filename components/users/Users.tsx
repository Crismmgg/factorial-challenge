import React, { useCallback } from "react";
import Link from "next/link";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HikingIcon from "@mui/icons-material/Hiking";
import DeleteIcon from "@mui/icons-material/Delete";

import { DataProps } from "../../types/types";
import { deleteUser } from "../../pages/api/deleteUser";

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
        {data.map(({ userName, avatar, steps, date, _id }) => {
          const handleDelete = useCallback(async () => {
            console.log("delete");
            // try {
            //   if (_id) {
            //     await deleteUser(_id.toString());
            //   }
            // } catch (e) {
            //   console.log(e);
            // }
          }, []);

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
                  <Stack>
                    <Button color="error" onClick={handleDelete}>
                      <DeleteIcon />
                      Remove
                    </Button>
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
