import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import getMuiTheme from "../styles/muiTheme";
import LocalStorage from "../util/LocalStorage";

interface IGlobalContext {
  mode?: PaletteMode;
  setMode?: Dispatch<SetStateAction<PaletteMode>>;
}
export const GlobalContext = createContext<IGlobalContext>({ mode: "dark" });

export const ColorModeContext = createContext({
  toggle: () => {},
});

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>(
    LocalStorage.getItem("mode") === "dark" ? "dark" : "light"
  );
  useEffect(() => {
    const toggleMode = () => {
      LocalStorage.setItem(
        "mode",
        LocalStorage.getItem("mode") === "dark" ? "dark" : "light"
      );
    };
    toggleMode();
  }, [mode]);

  return (
    <GlobalContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={getMuiTheme(mode)}>
          <GlobalStyle />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
