import React, { FormEvent, useCallback, useState } from "react";
import Router from "next/router";

import { faker } from "@faker-js/faker";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

interface CreateUserModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}
export default function CreateUserModal({
  isOpen,
  onCloseModal,
}: CreateUserModalProps) {
  const [userName, setUserName] = useState<string>("");
  const [steps, setSteps] = useState<number>(0);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

  const handleSubmit = async (
    ev: FormEvent,
    userName: string,
    steps: number
  ) => {
    ev.preventDefault();

    const user = {
      userName,
      steps: steps.toString(),
      date: new Date(),
      avatar: faker.image.avatar(),
    };

    let res = await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user }),
    });
    await res.json();

    if (res.status === 200) {
      Router.reload();
      onCloseModal();
    }
  };

  const handleOnChangeName = useCallback((ev: any) => {
    setUserName(ev.target.value);
  }, []);

  const handleOnChangeSteps = useCallback((ev: any) => {
    setSteps(ev.target.value);
  }, []);

  return (
    <Modal open={isOpen}>
      <Box sx={style}>
        <CloseIcon onClick={onCloseModal} sx={{ position: "absolute" }} />
        <Stack spacing={5} sx={{ alignItems: "center" }}>
          <Typography variant="h5" sx={{ color: "#2F9B20" }}>
            Create new user
          </Typography>
          <form onSubmit={(ev) => handleSubmit(ev, userName, steps)}>
            <Stack spacing={3} sx={{ flexDirection: "column" }}>
              <TextField
                required
                label="User Name"
                size="small"
                value={userName}
                onChange={handleOnChangeName}
              />
              <TextField
                required
                label="Steps"
                helperText="Only integers numbers allowed"
                size="small"
                value={steps}
                onChange={handleOnChangeSteps}
              />
              <Stack>
                <Typography variant="body1" sx={{ mr: 1, color: "#595959" }}>
                  Registration date:
                </Typography>
                <Typography sx={{ mr: 1, color: "#595959" }}>
                  {new Date().toUTCString()}
                </Typography>
              </Stack>
            </Stack>
            <Stack width="100%">
              <Button
                type="submit"
                sx={{ color: "#2F9B20", mt: 3 }}
                endIcon={<SendIcon />}
              >
                Create
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
}
