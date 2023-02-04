import React from "react";
import { MuiThemeProvider } from "./components/providers";
import { MyRoutes } from "./pages/MyRoutes";

export const App = () => {
  return (
    <MuiThemeProvider>
      <MyRoutes />
    </MuiThemeProvider>
  );
};
