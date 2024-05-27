import React from "react";
import ReactDOM from "react-dom/client";
import InitialStyles from "./styles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InitialStyles>
      <App />
    </InitialStyles>
  </React.StrictMode>
);
