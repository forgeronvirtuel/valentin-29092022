import Grid from "@mui/material/Grid";
import {MarketplaceCard} from "./MarketplaceCard";
import * as React from "react";

export function GridMarketplaceCard() {
  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <MarketplaceCard></MarketplaceCard>
    </Grid>
  )
}