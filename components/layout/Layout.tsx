import React from "react";
import Link from "next/link";

import { Button, Grid, Typography } from "@mui/material";

export default function Layout() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={7}
      sx={{ backgroundColor: "#F5FCF4" }}
    >
      <Grid item>
        <Typography
          variant="h2"
          className="layout_title"
          sx={{
            px: 1.5,
            textAlign: "center",
            fontWeight: "600",
            fontFamily: "system-ui",
            color: "#2F9B20",
          }}
        >
          Welcome to the step control app!
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "400",

            color: "#38852D",
          }}
        >
          What would you like to do?
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ pl: 0 }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#7DDC6F" }}
        >
          <Link href="/dashboard">See Dashboard</Link>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#7DDC6F",

            ":active": {
              boxShadow: "none",
              backgroundColor: "#7DDC6F",
              borderColor: "#7DDC6F",
            },
          }}
        >
          <Link href="/users">Go to users</Link>
        </Button>
      </Grid>
    </Grid>
  );
}
