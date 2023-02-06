import React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { InputControlled as Input } from "../../../../components/molecules";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { UseControllerProps } from "react-hook-form";

type Prop = {
  useControllerProps: UseControllerProps;
};

export const PwField = ({ useControllerProps }: Prop) => {
  const [isMouseEnter, setIsMouseEnter] = React.useState(false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  return (
    <Input
      useControllerProps={useControllerProps}
      label="PASSWORD"
      type={isMouseDown ? "text" : "password"}
      fullWidth
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      InputProps={{
        endAdornment: isMouseEnter && (
          <InputAdornment position="end">
            <IconButton
              onMouseDown={() => setIsMouseDown(true)}
              onMouseUp={() => setIsMouseDown(false)}
            >
              {isMouseDown ? (
                <VisibilityIcon color="primary" />
              ) : (
                <VisibilityOffIcon color="primary" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
