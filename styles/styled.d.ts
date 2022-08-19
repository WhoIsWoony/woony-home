import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    light: Palette["primary"];
  }
  interface PaletteOptions {
    dark: PaletteOptions["primary"];
    light: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    dark: true;
    light: true;
  }
}
