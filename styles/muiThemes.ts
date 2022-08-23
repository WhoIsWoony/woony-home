import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#999999",
    },
    dark: { main: "#000000" },
    light: { main: "#ffffff" },
  },
  typography: {
    button: {},
  },
  components: {
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
      main: "#999999",
    },
    dark: { main: "#ffffff" },
    light: { main: "#000000" },
  },
  typography: {
    button: {},
  },
  components: {
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
