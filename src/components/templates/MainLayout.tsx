import React from "react";
import styled from "@emotion/styled";
import { getChildrenByName } from "../../lib/utils/getChildrenByName";

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const arrayTitleComponenets = getChildrenByName(children, "Title");
  const arrayBodyComponenets = getChildrenByName(children, "Body");
  return <Layout>{arrayTitleComponenets}</Layout>;
};

const Title = () => {};

// [Todo] Body 부분을 없앨 수 있지 않을까?
const Body = () => {};

export const MainLayout = Object.assign(Main, { Title, Body });
