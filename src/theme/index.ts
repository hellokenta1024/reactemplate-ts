import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#FF5722",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    body1: {
      fontSize: '1.4rem'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
