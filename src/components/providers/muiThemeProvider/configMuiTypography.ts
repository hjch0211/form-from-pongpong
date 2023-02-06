import { TypographyOptions } from "@mui/material/styles/createTypography";
import { myColor } from "../../constants/myColor";

export const configMuiTypography: TypographyOptions = {
  h1: {
    fontSize: 60,
    fontWeight: 700,
    color: myColor.primary,
    letterSpacing: -5,
  },
  subtitle1: {
    fontSize: 20,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "2px",
  },
  body2: { fontSize: 16, fontWeight: 500 },
  button: {},
};
