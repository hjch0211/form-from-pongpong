import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Title } from "../molecules";

type Props = {
  heading?: React.ReactNode;
};

export const MainHeader = ({ heading }: Props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>
          {!!heading && <Title />}

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            {!!heading ? heading : <Title />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
