import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { isEmpty } from "../../lib/utils/isEmpty";

type Props<TFieldValues extends FieldValues = FieldValues> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  errors: FieldErrors<TFieldValues>;
  names: string[];
  children: React.ReactNode;
};

export const InputMulti = ({ errors, names, children, ...props }: Props) => {
  return (
    <>
      <div {...props}>{children}</div>
      <FormHelperText error={!isEmpty(errors)}>
        {names.map((name) => errors[name]?.message)[0] as string}
      </FormHelperText>
    </>
  );
};
