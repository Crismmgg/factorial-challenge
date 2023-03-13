import React, { useCallback, useState } from "react";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Router from "next/router";

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
import CreateUserModal from "./CreateUserModal";

export default function Users({ data }: DataProps) {
  const [isModalopen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const dataSortedByDate = data.sort((a, b) =>
    b.date.toLocaleString().localeCompare(a.date.toLocaleString())
  );

  const handleDelete = async (id: ObjectId) => {
    let res = await fetch("/api/remove?userId=" + id, {
      method: "DELETE",
    });

    await res.json();

    if (res.status === 200) {
      const userIndex = dataSortedByDate.findIndex((user) => user._id === id);
      if (userIndex !== -1) {
        dataSortedByDate.splice(userIndex, 1);
      }

      Router.reload();
    }
  };

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
      <Button
        variant="contained"
        sx={{ backgroundColor: "#7DDC6F" }}
        onClick={handleOpenModal}
      >
        Create new user
      </Button>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "#595959" }}>
          Current users
        </Typography>
        <Typography variant="h6" sx={{ color: "#595959" }}>
          {dataSortedByDate.length}
        </Typography>
      </Stack>

      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {dataSortedByDate.map(({ userName, avatar, steps, date, _id }) => {
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
                  <Stack>
                    <Button
                      color="error"
                      onClick={() => handleDelete(_id as ObjectId)}
                    >
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
      <CreateUserModal isOpen={isModalopen} onCloseModal={handleCloseModal} />
    </Stack>
  );
}
