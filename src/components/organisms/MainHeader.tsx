import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import { Empty } from "../atoms";

type Props = {
  heading?: React.ReactNode;
};

export const MainHeader = ({ heading }: Props) => {
  const navigate = useNavigate();
  // 스타일링 작업중
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>
          {!!heading && (
            <Typography variant="subtitle1" onClick={() => navigate("/")}>
              폼 프롬 스티로폼
            </Typography>
          )}

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            {!!heading ? (
              heading
            ) : (
              <Typography variant="subtitle1" onClick={() => navigate("/")}>
                폼 프롬 스티로폼
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Empty height="2rem" />
    </>
  );
};
