import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import {Divider} from "@mui/material";
import {theme} from './theme';
import { MarketplaceHeaders } from './MarketplaceHeaders';
import { MarketplaceAppBar } from './MarketplaceAppBar'
import {useSnackbar} from "notistack";
import {ReactElement, useEffect, useState} from "react";
import {GridMarketplaceCard} from "./GridMarketplaceCard";

interface NftCollection {
  address: string;
  name: string;
  certified: boolean;
  avatar: string;
  kind: string;
}

interface NftSale {
  sale_id: string;
  seller: number;
  unitary_price_float: number;
}

interface NftOffer {
  offer_id: string;
  kind: string;
  side: string;
  unitary_price_float: number;
}

interface Nft {
  asset_id: string;
  name: string;
  collection: NftCollection;
  thumbnail: string;
  sale: NftSale;
  offer: NftOffer;
  rank: number;
  balance: number;
}

enum HttpStatus {
  OK = 200
}

class HttpError extends Error {
  constructor(readonly status: number, readonly statusText: string) {
    super();
  }

  public toString(): string {
    return `${this.status}: ${this.statusText}`
  }
}

// fetchNftList fetch the list of nft.
// If the request fails, throw an HttpError.
// If the conversion in json fails, throw a
async function fetchNftList(consumer: Function): Promise<void> {
  const res = await window.fetch("https://test-api.dev.kalao.io/seach");
  if(res.status !== HttpStatus.OK) {
    throw new HttpError(res.status, res.statusText)
  }
  const dataJson = await res.json() as { nfts: Nft[] }
  consumer(dataJson.nfts)
}

export default function App(): ReactElement {
  const { enqueueSnackbar } = useSnackbar();
  const [nfts, setNfts]  = useState<Nft[]>([])

  async function initiateRequest(): Promise<void> {
    try {
      await fetchNftList(setNfts)
    } catch (e) {
      if(e instanceof HttpError) {
        enqueueSnackbar(`Request failed with status ${e}`, {variant: "error"})
      }
    }
  }

  useEffect(() => {
    initiateRequest()
  }, [])

  const cards = nfts?.map(nft => <GridMarketplaceCard
    xs={12}
    sm={6}
    md={3}
    xl={1}
    kind={nft.collection.kind}
    thumbnail={nft.thumbnail}></GridMarketplaceCard>)

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
            {cards}
          </Grid>

        </Container>
      </main>
    </ThemeProvider>
  );
}
