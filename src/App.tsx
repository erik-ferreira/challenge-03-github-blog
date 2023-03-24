import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />

      <ToastContainer autoClose={1500} position="bottom-right" theme="dark" />
    </ThemeProvider>
  );
}
