import { createTheme } from "@mui/material";

const muiTheme = createTheme({
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
  },
});

export default muiTheme;
