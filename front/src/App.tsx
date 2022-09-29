import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import {Divider} from "@mui/material";
import {theme} from './theme';
import { MarketplaceHeaders } from './MarketplaceHeaders';
import { MarketplaceAppBar } from './MarketplaceAppBar'
import { MarketplaceCard } from './MarketplaceCard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MarketplaceAppBar/>
      <Divider/>
      <main>
        <MarketplaceHeaders/>
        <Container maxWidth="xl">
          <Divider/>

          <Grid container spacing={2} justifyContent="flex-start">
            <MarketplaceCard></MarketplaceCard>
            <MarketplaceCard></MarketplaceCard>
            <MarketplaceCard></MarketplaceCard>
            <MarketplaceCard></MarketplaceCard>
            <MarketplaceCard></MarketplaceCard>
            <MarketplaceCard></MarketplaceCard>
          </Grid>

        </Container>
      </main>
    </ThemeProvider>
  );
}
