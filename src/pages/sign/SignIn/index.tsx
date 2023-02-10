import React from "react";
import { Empty, Form } from "../../../components/atoms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { MainHeader } from "../../../components/organisms";
import { Button, Typography } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, PwField, SaveIdCheckBox } from "./components";

export const SignIn = () => {
  const { reg, onSubmit, setValue, toggleSaveId } = useSignIn();

  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Title>
          <Typography variant="h1">Sign In</Typography>
        </MainLayout.Title>
        <MainLayout.Body>
          <Form onSubmit={onSubmit}>
            <IdField useControllerProps={reg.email} setValue={setValue} />
            <Empty height="3rem" />
            <PwField useControllerProps={reg.password} />
            <Empty height="1rem" />
            <SaveIdCheckBox toggleSaveId={toggleSaveId} />
            <Empty height="2rem" />
            <Button variant="contained" type="submit" style={{ width: "50%" }}>
              Sign
            </Button>
          </Form>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
