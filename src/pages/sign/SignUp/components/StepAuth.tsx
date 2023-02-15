import React from "react";
import { FieldValues, UseControllerProps, FieldErrors } from "react-hook-form";
import { TextFieldControlled as Input } from "../../../../components/molecules";
import { AutoCompleteControlled } from "../../../../components/molecules";
import { Box, TextField } from "@mui/material";
import { PwField, InputMulti } from "../../../../components/molecules";
import { Empty } from "../../../../components/atoms";
import { CtaBtn } from "../../../../components/molecules";

const DOMAINS: readonly String[] = ["google.com", "naver.com"];

type Props = {
  reg: {
    name: UseControllerProps<FieldValues, string>;
    id: UseControllerProps<FieldValues, string>;
    domain: UseControllerProps<FieldValues, string>;
    password: UseControllerProps<FieldValues, string>;
    confirmPassword: UseControllerProps<FieldValues, string>;
  };
  errors: FieldErrors<FieldValues>;
  validate: () => void;
};

export const StepAuth = ({ reg, errors, validate }: Props) => {
  const onClickNextBtn = () => {
    validate();
  };
  return (
    <>
      <Input fullWidth label="NAME" useControllerProps={reg.name} />
      <Empty height="2rem" />
      <InputMulti
        names={[reg.id.name, reg.domain.name]}
        errors={errors}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Input label="ID" useControllerProps={reg.id} disableHelperText />
        &nbsp;@&nbsp;
        <AutoCompleteControlled
          useControllerProps={reg.domain}
          sx={{ width: "50%" }}
          freeSolo
          options={DOMAINS}
          renderOption={(props, option) => (
            <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
              {option}
            </Box>
          )}
          disableClearable
          renderInput={(params) => <TextField {...params} label="DOMAIN" />}
        />
      </InputMulti>
      <Empty height="2rem" />
      <InputMulti
        names={[reg.password.name, reg.confirmPassword.name]}
        errors={errors}
        style={{ display: "flex" }}
      >
        <PwField disableHelperText label="PASSWORD" useControllerProps={reg.password} />
        &nbsp;
        <PwField disableHelperText label="CONFIRM" useControllerProps={reg.confirmPassword} />
      </InputMulti>
      <Empty height="2rem" />
      <CtaBtn onClick={onClickNextBtn}>다음</CtaBtn>
    </>
  );
};
