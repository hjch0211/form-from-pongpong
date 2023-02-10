import React from "react";
import styled from "@emotion/styled";

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export const MainLayout = Object.assign(Main, {});
