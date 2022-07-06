import { Stack, Typography } from "@mui/material";
import React from "react";
import CardStyle from "../components/Card";

export default function Home() {
  return (
    <>
      <Stack direction="row" mb={5} p={2} spacing={5}>
        <Typography>Home</Typography>
        <Typography>Home</Typography>
        <Typography>Home</Typography>
        <Typography>Home</Typography>
      </Stack>
      <CardStyle />
    </>
  );
}
