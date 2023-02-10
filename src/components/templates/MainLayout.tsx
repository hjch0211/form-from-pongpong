import React from "react";
import styled from "@emotion/styled";
import { getChildrenByName } from "../../lib/utils/getChildrenByName";
import { isEmpty } from "../../lib/utils/isEmpty";
import { Empty } from "../atoms";

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const [TitleComponenets] = getChildrenByName(children, "Title");
  const arrayBodyComponenets = getChildrenByName(children, "Body");

  return (
    <Layout>
      <Empty height="2rem" />
      {!!TitleComponenets && TitleComponenets}
      <Empty height="3rem" />
      {isEmpty(arrayBodyComponenets) || arrayBodyComponenets}
    </Layout>
  );
};

const Title = ({ children }: Props) => {
  return <>{children}</>;
};
// [Todo] Body 부분을 없앨 수 있지 않을까?
const Body = ({ children }: Props) => {
  return <>{children}</>;
};

export const MainLayout = Object.assign(Main, { Title, Body });
