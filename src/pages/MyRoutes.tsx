import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Main } from "./Main";
import { SignIn } from "./sign/SignIn";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
    </ReactRoutes>
  );
};
