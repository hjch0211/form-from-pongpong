import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Title = () => {
  const navigate = useNavigate();
  return (
    <Button variant="text" component="h1" onClick={() => navigate("/")}>
      폼 프롬 스티로폼
    </Button>
  );
};
