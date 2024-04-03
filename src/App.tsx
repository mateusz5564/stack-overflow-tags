import React from "react";
import Tags from "./Tags/Tags";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ pb: 2 }}>
        <ErrorBoundary fallback={<div>Something went wrong during rendering tags, try to refresh the page</div>}>
          <Tags />
        </ErrorBoundary>
      </Container>
    </ThemeProvider>
  );
}

export default App;
