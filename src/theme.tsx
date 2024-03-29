import { createTheme } from "@mui/material/styles";
import { lightBlue, amber} from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: amber[500],
    },
  },
});
