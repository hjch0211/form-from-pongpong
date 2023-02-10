import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Subtitle = () => {
  const navigate = useNavigate();
  return (
    <Typography variant="subtitle1" onClick={() => navigate("/")}>
      폼 프롬 스티로폼
    </Typography>
  );
};
