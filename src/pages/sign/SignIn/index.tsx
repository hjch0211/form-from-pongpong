import React from "react";
import { Empty, Form } from "../../../components/atoms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { MainHeader } from "../../../components/organisms";
import { Button, Typography, Stack, Divider, ButtonProps } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, PwField, SaveIdCheckBox } from "./components";
import styled from "@emotion/styled";

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

          <Empty height="2rem" />

          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            {/* [Todo] 리펙터링 하기 */}
            <Button style={{ fontSize: 15 }}>회원가입</Button>
            <Button style={{ fontSize: 15 }}>아이디 찾기</Button>
            <Button style={{ fontSize: 15 }}>비밀번호 찾기</Button>
          </Stack>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
