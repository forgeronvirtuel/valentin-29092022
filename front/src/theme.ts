import {createTheme} from "@mui/material/styles";
import shadows, {Shadows} from "@mui/material/styles/shadows";

export const theme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#777777"
    },
    secondary: {
      main: "#18191D",
    },
    background:{
      default: "#18191D",
      paper: "#18191D",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides:{
        root: {
          backgroundColor: "#AAAAAA"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "& .hidden-button": {
            visibility: "hidden",
          },
          "&:hover .hidden-button": {
            visibility: "visible",
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {

      }
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#18191D"
        }
      }
    }
  }
});
