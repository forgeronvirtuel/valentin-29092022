import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function MarketplaceHeaders() {
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