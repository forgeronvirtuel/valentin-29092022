import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from "@mui/material/Avatar";
import shadows, { Shadows } from '@mui/material/styles/shadows';
import {Divider} from "@mui/material";
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const theme = createTheme({
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

function Headers() {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Explore
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          gutterBottom
          paragraph>
          Explore more than 100k of amazing NFT's on Kalao marketplace and filters them at your convenience.
        </Typography>
      </Container>
    </Box>
  )
}

function MarketplaceNavBar() {
  return (
    <AppBar position="relative">
      <Toolbar color="secondary.main">
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
  )
}

function MarketPlaceCard() {
  return (
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="https://robohash.org/xpuqubgagn.png?set=set1"
            alt="random"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="p">
              Man #01
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" className="hidden-button">Buy Now</Button>
          </CardActions>
        </Card>
      </Grid>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MarketplaceNavBar/>
      <Divider/>
      <main>
        <Headers/>
        <Container maxWidth="xl">
          <Divider/>

          <Grid container spacing={2} justifyContent="flex-start">
            <MarketPlaceCard></MarketPlaceCard>
            <MarketPlaceCard></MarketPlaceCard>
            <MarketPlaceCard></MarketPlaceCard>
            <MarketPlaceCard></MarketPlaceCard>
            <MarketPlaceCard></MarketPlaceCard>
            <MarketPlaceCard></MarketPlaceCard>
          </Grid>

        </Container>
      </main>
    </ThemeProvider>
  );
}
