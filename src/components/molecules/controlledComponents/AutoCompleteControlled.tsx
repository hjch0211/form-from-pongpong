import { Autocomplete, AutocompleteProps, ChipTypeMap } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type ControlledAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
  useControllerProps: UseControllerProps;
  disableHelperText?: Boolean;
};

/**
 * @description
 * 제어 컴포넌트를 위해 useController를 이용해 AutoComplete 생성
 */
export const AutoCompleteControlled = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  useControllerProps,
  disableHelperText = false,
  ...props
}: ControlledAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const { field } = useController(useControllerProps);

  return <Autocomplete {...field} {...props} />;
};
