import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import * as serviceWorker from "./serviceWorker";
import ConText from "store/ContextApi";

import "languages/i18next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";

ReactDOM.render(
  <React.StrictMode>
    <ConText>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ConText>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
