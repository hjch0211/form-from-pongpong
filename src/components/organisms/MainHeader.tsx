import React from "react";
import { Typography } from "@mui/material";
import { Empty } from "../atoms";

export const MainHeader = () => {
  return (
    <div>
      <Empty height="1rem" />
      <Typography variant="h1">폼 프롬 스티로폼</Typography>
    </div>
  );
};
