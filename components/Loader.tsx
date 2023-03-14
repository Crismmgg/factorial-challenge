import { CircularProgress, Stack, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Stack
      height="100vh"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCF4",
      }}
      spacing={4}
    >
      <Typography variant="h4" sx={{ color: "#2F9B20" }}>
        Loading...
      </Typography>
      <CircularProgress size={70} color="success" />
    </Stack>
  );
}
