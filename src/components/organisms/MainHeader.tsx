import React from "react";
import { Toolbar, Button, Typography, Divider, Stack } from "@mui/material";
import { Title } from "../molecules";
import PortraitIcon from "@mui/icons-material/Portrait";

type Props = {
  menu?: React.ReactNode[];
};

export const MainHeader = ({ menu }: Props) => {
  return (
    <>
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title />

        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ marginLeft: 2, flexGrow: 1 }}
        >
          {menu}
        </Stack>

        <Button>
          <PortraitIcon />
          &nbsp;
          <Typography>내 정보</Typography>
        </Button>
      </Toolbar>
    </>
  );
};
