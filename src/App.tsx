import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import Routes from "./routes";

function App() {
  return (
    <React.Fragment>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
