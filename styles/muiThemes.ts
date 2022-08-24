import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
      light: "#000000",
      dark: "#ffffff",
    },
    dark: { main: "#000000" },
    light: { main: "#fff6dd" },
    appBarColor: { main: "#fff6ccee" },
  },
  typography: {
    button: {},
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "appBarColor",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "#000000",
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
      light: "#ffffff",
      dark: "#222222",
    },
    dark: { main: "#fff6dd" },
    light: { main: "#000000" },
    appBarColor: { main: "#000000" },
  },
  typography: {
    button: {},
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "appBarColor",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "#ffffff",
      },
    },
  },
});
