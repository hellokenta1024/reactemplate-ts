import React, { useEffect, useCallback } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";

import theme from "./theme";
import Routes from "./routes";
import firebase from "./utils/firebase";
import { setAccount, getCurrentUser } from "./redux/actions/account";

function App() {
  const dispatch = useDispatch();
  // You should uncomment after setup firebase config
  // Go to /utils/firebase.ts and setup!

  const setupUser = useCallback(
    async (userAuth: firebase.User | null) => {
      if (!userAuth) {
        dispatch(setAccount(null));
        return;
      }

      await dispatch(getCurrentUser());
      return;
    },
    [dispatch]
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setupUser(user);
    });
  }, [setupUser]);
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
