import React from "react";
import { MainHeader } from "../../../components/organisms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { Typography } from "@mui/material";

import { useSignUp } from "./hook";
import { Form } from "../../../components/atoms";
import { StepAuth } from "./components";

export const SignUp = () => {
  const { reg, errors, onSubmit, validateStepAuth } = useSignUp();

  // 1. 사용자 이름을 입력 받음
  // 2. 사용자 아이디를 입력 받음
  // [Todo] 처음에는 최소한의 정보를 받고 추후에 추가 정보를 입력하게끔 설계
  /* [Todo] 여기에서 스텝별로 입력폼 */
  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Title>
          <Typography variant="h1">Sign Up</Typography>
        </MainLayout.Title>
        <MainLayout.SubTitle>
          <Typography>회원 정보를 입력해주세요.</Typography>
        </MainLayout.SubTitle>
        <MainLayout.Body>
          {/* 카드 형태로 영역 구분하면 좋을 것 같음 */}
          {/* step1 - step2 -step3 이런 형식 사용 ㄱㄱ */}
          <Form onSubmit={onSubmit}>
            <StepAuth errors={errors} reg={reg} validate={validateStepAuth} />
          </Form>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
