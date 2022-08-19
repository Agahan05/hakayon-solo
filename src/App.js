import { ThemeProvider } from "@mui/material";
import { green, purple, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import React from "react";
import Navigation from "./Navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[900],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
