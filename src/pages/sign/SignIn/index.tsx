import React from "react";
import { Empty, Form } from "../../../components/atoms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { MainHeader } from "../../../components/organisms";
import { Button, Typography, Stack, Divider } from "@mui/material";
import { useSignIn } from "./hook";
import { IdField, SaveIdCheckBox } from "./components";
import { SubmitBtn } from "../../../components/molecules";
import { PwField } from "../../../components/molecules";
import { myColor } from "../../../components/constants/myColor";
import { color } from "@mui/system";

export const SignIn = () => {
  const { reg, onSubmit, setValue, toggleSaveId, navigate } = useSignIn();

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
            <PwField label="PASSWORD" useControllerProps={reg.password} />
            <SaveIdCheckBox toggleSaveId={toggleSaveId} />
            <Empty height="2rem" />
            <SubmitBtn>로그인</SubmitBtn>
          </Form>

          <Empty height="2rem" />

          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            {/* [Todo] 리펙터링 하기 */}
            <Button style={{ fontSize: 15, fontFamily: "SpoqaHanSansNeo-Regular" }} color="inherit">
              아이디 찾기
            </Button>
            <Button style={{ fontSize: 15, fontFamily: "SpoqaHanSansNeo-Regular" }} color="inherit">
              비밀번호 찾기
            </Button>
            <Button
              style={{ fontSize: 15, fontFamily: "SpoqaHanSansNeo-Regular" }}
              color="inherit"
              onClick={() => navigate("/sign-up")}
            >
              회원가입
            </Button>
          </Stack>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
