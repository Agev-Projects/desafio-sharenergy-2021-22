import { createTheme } from "@mui/material/styles";
import { teal, lime } from "@mui/material/colors";

const Theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: lime[500],
    },
  },
});

export default Theme;
