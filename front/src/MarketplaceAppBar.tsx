import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import AdbIcon from "@mui/icons-material/Adb";
import Avatar from "@mui/material/Avatar";
import * as React from "react";

export function MarketplaceAppBar() {
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