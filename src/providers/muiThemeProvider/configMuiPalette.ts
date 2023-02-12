import { PaletteOptions } from "@mui/material";
import { myColor } from "../../components/constants/myColor";

export const configMuiPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: myColor.primary,
  },
  text: {
    primary: myColor.text,
  },
};
