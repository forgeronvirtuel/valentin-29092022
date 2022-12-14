import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";

export interface MarketplaceCardProps {
  kind: string;
  thumbnail: string;
}

export function MarketplaceCard(props: MarketplaceCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className={props.kind}>
      <CardMedia
        component="img"
        image={props.thumbnail}
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
  )
}