import type { AppProps } from "next/app";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { darkTheme, lightTheme } from "../styles/muiThemes";
import LocalStorage from "../util/LocalStorage";

interface IGlobalContext {
  selectedTheme?: PaletteMode;
  setSelectedTheme?: Dispatch<SetStateAction<PaletteMode>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

export const ColorModeContext = createContext({
  toggle: () => {},
});

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>(
    LocalStorage.getItem("selectedTheme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (!LocalStorage.getItem("selectedTheme"))
      LocalStorage.setItem("selectedTheme", "dark");
    setTheme(selectedTheme === "dark" ? darkTheme : lightTheme);
    LocalStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <GlobalContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <style global jsx>{`
          body {
            background: ${selectedTheme === "dark" ? "#000000" : "#ffffff"};
          }
        `}</style>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
