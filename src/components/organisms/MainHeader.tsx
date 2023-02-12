import React from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { Title } from "../molecules";
import PortraitIcon from "@mui/icons-material/Portrait";

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
          <Button>
            <PortraitIcon />
            &nbsp;
            <Typography>내 정보</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
