import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";
import Workspace from "components/Workspace";
import Splitter from "components/Workspace/Splitter";

import { Provider } from "react-redux";
import { store } from "store";

import reportWebVitals from "./reportWebVitals";

// Styles
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        workspace={
          <Workspace
            splitter={
              <div className="hidden lg:block">
                <Splitter />
              </div>
            }
          />
        }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
