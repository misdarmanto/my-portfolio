import { Container } from "@mui/system";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navigations from "../components/Navigation";
import { useContextApi } from "../lib/hooks/useContexApi";

export default function Layout({ children }) {
  const { isChangeMode } = useContextApi();
  return (
    <div style={{ backgroundColor: isChangeMode ? "#061b31" : "#fafafa" }}>
      <CssBaseline />
      <Navigations />
      <Container maxWidth="lg" sx={{ minHeight: window.innerHeight }}>
        {children}
      </Container>
    </div>
  );
}
