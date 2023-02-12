import { Components } from "@mui/material";
import { myColor } from "../../components/constants/myColor";

export const configMuiComponents: Components = {
  // default css setting
  MuiCssBaseline: {
    styleOverrides: {
      "html, body": { height: "100%", width: "100%", backgroundColor: myColor.backGround },
    },
  },
};
