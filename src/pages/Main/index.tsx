import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { MainHeader } from "../../components/organisms";
import { MainLayout } from "../../components/templates";
import { Empty } from "../../components/atoms";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Body>
          <Typography>원하는 스티로폼을 구매해 보세요</Typography>
          <Empty height="2rem" />
          <Button size="large" variant="outlined" onClick={() => navigate("/sign-in")}>
            Sign in
          </Button>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
