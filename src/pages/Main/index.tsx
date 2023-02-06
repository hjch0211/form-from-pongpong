import React from "react";
import { Typography } from "@mui/material";
import { MainHeader } from "../../components/organisms";
import { MainLayout } from "../../components/templates";

export const Main = () => {
  return (
    <MainLayout>
      <MainHeader />
      <Typography>스티로폼</Typography>
    </MainLayout>
  );
};
