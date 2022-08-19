import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";
import muiTheme from "../styles/muiTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
