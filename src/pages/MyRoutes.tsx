import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Main } from "./Main";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
    </ReactRoutes>
  );
};
