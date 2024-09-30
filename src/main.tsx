import App from "./App.tsx";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// https://www.codingdeft.com/posts/react-18-typescript-error/
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
