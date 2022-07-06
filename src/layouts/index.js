import { Container } from "@mui/system";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ height: window.innerHeight }}>
        {children}
      </Container>
    </>
  );
}
