import Grid from "@mui/material/Grid";
import {MarketplaceCard, MarketplaceCardProps} from "./MarketplaceCard";
import * as React from "react";

export interface GridMarketplaceCardProps extends MarketplaceCardProps{
  xs: number;
  sm: number;
  md: number;
  xl: number;
}

export function GridMarketplaceCard(props : GridMarketplaceCardProps) {
  return (
    <Grid item xs={props.xs} sm={props.sm} md={props.md} xl={props.xl}>
      <MarketplaceCard kind={props.kind} thumbnail={props.thumbnail}></MarketplaceCard>
    </Grid>
  )
}