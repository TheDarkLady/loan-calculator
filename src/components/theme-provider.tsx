// theme-provider.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { Theme as MuiTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

type ThemeMode = "light" | "dark";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const getMuiTheme = (mode: ThemeMode): MuiTheme  =>
  createTheme({
    palette: {
      mode,
    },
  });

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(storageKey);
    return (stored as ThemeMode) || defaultTheme;
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={getMuiTheme(theme)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
