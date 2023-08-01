import React from "react";
import ReactDom from "react-dom/client";

import App from "./App.jsx";
import "@/sass/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
