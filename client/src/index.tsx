import React from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App";
import Workspace from "components/Workspace";
import Splitter from "components/Workspace/Splitter";

import { Provider } from "react-redux";
import { store } from "store";

// Styles
import "./styles/index.scss";

// todo: avoid ! if possible
const root = createRoot(document.getElementById("root")!);

root.render(
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
  </React.StrictMode>
);
