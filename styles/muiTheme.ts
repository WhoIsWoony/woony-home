import { createTheme, PaletteMode } from "@mui/material";

const getMuiTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#999999",
            },
            dark: { main: "#ffffff" },
            light: { main: "#000000" },
          }
        : {
            primary: {
              main: "#999999",
            },
            dark: { main: "#000000" },
            light: { main: "#ffffff" },
          }),
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
    },
  });

export default getMuiTheme;
