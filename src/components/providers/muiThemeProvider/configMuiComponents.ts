import { Components } from "@mui/material";
import { myColor } from "../../constants/myColor";

export const configMuiComponents: Components = {
  // default css setting
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #root": { height: "100%", width: "100%", backgroundColor: myColor.backGround },
    },
  },
};
