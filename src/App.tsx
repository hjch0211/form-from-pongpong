import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./components/providers";
import { MyRoutes } from "./pages/MyRoutes";

export const App = () => {
  return (
    <Router>
      <MuiThemeProvider>
        <MyRoutes />
      </MuiThemeProvider>
    </Router>
  );
};
