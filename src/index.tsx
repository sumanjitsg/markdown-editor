import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "components/App";
import Workspace from "components/workspace/Workspace";
import reportWebVitals from "./reportWebVitals";

// Styles
import "./sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App workspace={<Workspace />} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
