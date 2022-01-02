import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";

import "languages/i18next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorker.unregister();
