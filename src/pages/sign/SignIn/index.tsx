import React from "react";
import { Empty, Form } from "../../../components/atoms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { MainHeader } from "../../../components/organisms";
import { Button, Typography } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, PwField, SaveIdCheckBox } from "./components";

export const SignIn = () => {
  const { reg, onSubmit, setValue, toggleSaveId } = useSignIn();

  // [Todo!!!!!!!!!!!!!!!!!!!!!!!!!!!!] 지금 index.css 폰트 적용이 안되는 중
  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Title>
          <Typography variant="h1">Sign In</Typography>
        </MainLayout.Title>
        <MainLayout.Body>
          <Form
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            onSubmit={onSubmit}
          >
            <IdField useControllerProps={reg.email} setValue={setValue} />
            <Empty height="3rem" />
            <PwField useControllerProps={reg.password} />
            <SaveIdCheckBox toggleSaveId={toggleSaveId} />
            <Empty height="2rem" />
            <Button variant="outlined" type="submit" sx={{ width: "60%", height: 60 }}>
              로그인
            </Button>
          </Form>
          {/* [Todo] 회원가입, 아이디 찾기, 비밀번호 찾기 구현하기 */}
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
