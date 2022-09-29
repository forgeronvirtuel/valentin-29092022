import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from "@mui/material/Avatar";
import shadows, { Shadows } from '@mui/material/styles/shadows';
import {Divider} from "@mui/material";

const theme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  palette: {
    primary: {
      main: "#18191D",
    },
    background:{
      default: "#18191D",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides:{
        root: {
          backgroundColor: "#333333"
        }
      }
    },
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
            <Grid item>
              <AdbIcon></AdbIcon>
            </Grid>
            <Grid item>
                <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider/>
    </ThemeProvider>
  );
}
