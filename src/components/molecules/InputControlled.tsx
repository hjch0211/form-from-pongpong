import { TextField, TextFieldProps } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

export type ControlledMuiProps = TextFieldProps & { useControllerProps: UseControllerProps };

/**
 * @description
 * 제어 컴포넌트를 위해 useController를 이용해 Input 생성
 */
export const InputControlled = ({ useControllerProps, ...props }: ControlledMuiProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(useControllerProps);

  return <TextField {...field} {...props} error={!!error} helperText={!!error && error.message} />;
};
