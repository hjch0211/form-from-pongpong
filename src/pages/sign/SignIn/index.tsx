import React from "react";
import { Empty, Form } from "../../../components/atoms";
import { MainLayout } from "../../../components/templates";
import { MainHeader } from "../../../components/organisms";
import { Button } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, PwField, SaveIdCheckBox } from "./components";

export const SignIn = () => {
  const { reg, onSubmit, setValue, toggleSaveId } = useSignIn();

  return (
    <MainLayout>
      <MainHeader />
      {/* MainLayout.Header로 ㄱㄱ */}
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
    </MainLayout>
  );
};
