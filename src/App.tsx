import React from "react";
import Tags from "./Tags/Tags";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ pb: 2 }}>
        <Tags />
      </Container>
    </ThemeProvider>
  );
}

export default App;
