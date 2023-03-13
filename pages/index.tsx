import React from "react";

import { Grid } from "@mui/material";

import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Layout />
    </Grid>
  );
}
