import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "./Main";
import { SignIn } from "./sign/SignIn";
import { SignUp } from "./sign/SignUp";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </ReactRoutes>
  );
};
