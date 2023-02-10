import { TypographyOptions } from "@mui/material/styles/createTypography";
import { myColor } from "../../constants/myColor";

export const configMuiTypography: TypographyOptions = {
  h1: {},
  subtitle1: {
    fontSize: 26,
    color: myColor.primary,
    fontFamily: "Jua",
  },
  subtitle2: {
    fontSize: 20,
    color: myColor.primary,
    fontFamily: "Jua",
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "2px",
  },
  body2: { fontSize: 16, fontWeight: 500 },
  button: { fontFamily: "Jua" },
};
