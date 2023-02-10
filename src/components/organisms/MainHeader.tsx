import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Subtitle } from "../molecules";

type Props = {
  heading?: React.ReactNode;
};

export const MainHeader = ({ heading }: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>
          {!!heading && <Subtitle />}

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            {!!heading ? heading : <Subtitle />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
