import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";
import { createContext, useState } from "react";
import getMuiTheme from "../styles/muiTheme";

export const ColorModeContext = createContext({
  toggle: () => {},
});

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={getMuiTheme(mode)}>
        <GlobalStyle />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
