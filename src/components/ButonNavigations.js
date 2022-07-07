import React from "react";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";
import { useContextApi } from "../lib/hooks/useContexApi";

const ButtonNavigations = ({ children, url, title, usingBorder }) => {
  const { isChangeMode } = useContextApi();
  const color = isChangeMode ? "#FFF" : "#000";
  const bgColor = isChangeMode ? "#061b31" : "#FFF";

  return (
    <a
      href={url}
      target="_blank"
      style={{ textDecoration: "none", color: color }}
    >
      <ListItemButton
        sx={{
          borderRadius: "20px",
          border: usingBorder ? "1px solid #e3e3e3" : "none",
          backgroundColor: bgColor,
        }}
      >
        <Typography
          variant="p"
          sx={{ pr: 0.2, fontWeight: "bold", color: color }}
        >
          {title}
        </Typography>
        {children}
      </ListItemButton>
    </a>
  );
};

export default ButtonNavigations;
