import React from "react";
import { Typography, Button } from "@mui/material";
import { MainHeader } from "../../components/organisms";
import { MainLayout } from "../../components/templates";
import { Empty } from "../../components/atoms";

export const Main = () => {
  return (
    <MainLayout>
      <MainHeader />
      <Typography>원하는 스티로폼을 구매해 보세요</Typography>
      <Empty height="2rem" />
      <Button size="large" variant="outlined">
        Sign in
      </Button>
    </MainLayout>
  );
};
