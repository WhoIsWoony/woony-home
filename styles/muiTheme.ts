import { createTheme, PaletteMode } from "@mui/material";

const getMuiTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#999999",
            },
            dark: { main: "#000000" },
            light: { main: "#ffffff" },
          }
        : {
            primary: {
              main: "#999999",
            },
            dark: { main: "#ffffff" },
            light: { main: "#000000" },
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
