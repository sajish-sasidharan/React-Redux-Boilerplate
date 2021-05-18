import { createMuiTheme } from "@material-ui/core/styles";

const themeDefault = createMuiTheme({
  typography: {
    fontFamily: '"Source Sans Pro", "Arial", sans-serif',
    fontSize: 11,
  },

  palette: {
    primary: {
      light: "#1c9ab7",
      main: "#1c9ab7",
      dark: "#1c9ab7",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#000000",
      main: "#000000",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    background: {
      // default: '#C0C0C0'
    },
  },
});

themeDefault.typography.h1 = {
  fontSize: "1.125rem",
  fontWeight: "500",
  fontFamily: '"Poppins", sans-serif',
  textAlign: "Center",
  "@media (min-width:600px)": {},
  [themeDefault.breakpoints.up("md")]: {},
};

export default themeDefault;
