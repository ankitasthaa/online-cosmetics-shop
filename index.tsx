import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c6656", // Darker Terra Cotta for better white text contrast
      light: "#d8a48f",
      dark: "#6d4033",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2d2d2d", // Darker almost black for clear text
    },
    text: {
      primary: "#2d2d2d",
      secondary: "#5c5c5c",
    },
    background: {
      default: "#fdfbf7",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#2d2d2d", // Ensure AppBar text defaults to dark
        },
      },
    },
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* StyledEngineProvider injectFirst allows Tailwind classes to override MUI styles if needed */}
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
