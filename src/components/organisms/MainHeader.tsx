import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Empty } from "../atoms";

type Props = {
  heading?: React.ReactNode;
};

// 인자가 있으면 로고가 왼쪽으로 이동
export const MainHeader = ({ heading }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Empty height="1rem" />
      {heading ? (
        heading
      ) : (
        <Typography variant="h1" onClick={() => navigate("/")}>
          폼 프롬 스티로폼
        </Typography>
      )}
      <Empty height="1rem" />
    </div>
  );
};
