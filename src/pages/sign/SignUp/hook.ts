import React from "react";
import { useForm } from "react-hook-form";
import { createControlledReg } from "../../../lib/utils/createControlledReg";
import {
  isRequired,
  isDomain,
  isEngAndNum,
  isSpecialCharactors,
  isMinLength,
} from "../../../lib/utils/validation";

const NAME = "name";
const ID = "id";
const DOMAIN = "domain";
const PW = "password";
const CONFIRM_PW = "confirm_password";

export const useSignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const createReg = createControlledReg(control);

  const reg = {
    name: createReg(NAME, {
      validate: { isRequired: (val: string) => isRequired(val) || "이름을 입력해야 합니다." },
    }),
    id: createReg(ID, {
      validate: {
        isRequired: (val: string) => isRequired(val) || "아이디를 입력해야 합니다.",
        isNotSpecialCharactors: (val: string) =>
          !isSpecialCharactors(val) || "특수 문자는 입력할 수 없습니다.",
      },
    }),
    domain: createReg(DOMAIN, {
      validate: {
        isRequired: (val: string) => isRequired(val) || "도메인을 입력해야 합니다.",
        isDomain: (val: string) => isDomain(val) || "도메인 형식이 올바르지 않습니다.",
      },
    }),
    password: createReg(PW, {
      validate: {
        isMinLength8: (val: string) => isMinLength(val, 8) || "비밀번호는 8자 이상이어야 합니다.",
        isEngAndNum: (val: string) => isEngAndNum(val) || "영문자와 숫자 조합이어야 합니다.",
        isSpecialCharactors: (val: string) =>
          isSpecialCharactors(val) || "특수 문자가 포함되어야 합니다.",
      },
    }),
    confirmPassword: createReg(CONFIRM_PW, {
      validate: {
        isRequired: (val: string) => isRequired(val) || "비밀번호 확인을 해야 합니다.",
        isConsistent: (val: string) => getValues(PW) === val || "비밀번호가 일치하지 않았습니다.",
      },
    }),
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return { reg, errors, onSubmit };
};
