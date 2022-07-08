import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ButtonNavigations from "./ButonNavigations";
import { Stack } from "@mui/material";
import { useContextApi } from "../lib/hooks/useContexApi";

export default function CardStyle({ data }) {
  const { isChangeMode } = useContextApi();
  const color = isChangeMode ? "#FFF" : "#000";
  const bgColor = isChangeMode ? "#001e3c" : "#FFF";

  return (
    <Card sx={{ backgroundColor: bgColor }}>
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={"bold"} color={color}>
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color={isChangeMode ? "#FFF" : "text.secondary"}
          mb={2}
        >
          {data.descriptions}
        </Typography>
        {data.stack.map((value, index) => (
          <Progress key={index} value={value.percentage} title={value.name} />
        ))}
      </CardContent>
      <CardActions>
        {data.sourceProject.map((data, index) => {
          switch (data.title) {
            case "sourceCode":
              return (
                <ButtonNavigations
                  key={index}
                  usingBorder
                  title={"Source Code"}
                >
                  <GitHubIcon />
                </ButtonNavigations>
              );
              break;
            case "liveDemo":
              return (
                <ButtonNavigations key={index} usingBorder title={"Live Demo"}>
                  <LiveTvIcon />
                </ButtonNavigations>
              );
              break;
            case "playStore":
              return (
                <ButtonNavigations key={index} usingBorder title={"Play Store"}>
                  <IoLogoGooglePlaystore />
                </ButtonNavigations>
              );
              break;
            default:
              break;
          }
        })}
      </CardActions>
    </Card>
  );
}

const Progress = ({ value, title }) => {
  const { isChangeMode } = useContextApi();
  const color = isChangeMode ? "#FFF" : "#000";

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography
        variant="body2"
        color={isChangeMode ? "#FFF" : "text.secondary"}
      >
        {title}
      </Typography>
      <div
        style={{
          width: `${value * 2}px`,
          height: "10px",
          backgroundColor: isChangeMode ? "#FFF" : "#f3f3f3",
          borderRadius: "10px",
        }}
      ></div>
      <small style={{ color: color }}>{value}%</small>
    </Stack>
  );
};
