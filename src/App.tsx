import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "constants/routes";
import SignIn from "pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path="*" element={<Navigate to={ROUTES.SIGN_IN} replace />} />
    </Routes>
  );
}

export default App;
