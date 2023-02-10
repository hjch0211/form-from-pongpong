import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Title = () => {
  const navigate = useNavigate();
  return (
    <Typography variant="h2" component="h1" onClick={() => navigate("/")}>
      폼 프롬 스티로폼
    </Typography>
  );
};
