import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Playlist} from "./Playlist"
export const PlayList = ({fvideos}) => {
  // todo: ^ set true when "Load more" button is clicked, then always load more at bottom of page
  console.log(fvideos.length);
  return (
    <div className = "video_playlist_container">
      <div className = "video_container">
      <Playlist/>
      </div>
      <div className = "playlist_container">
    <Grid container spacing={0} justify="center">
      {fvideos.map((post, index) =>
            <Grid item key={post.name}>
              <div className="Source_Click">
              <Card style = {{width:300, height:200, margin:0}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={post.name}
                    height="140"
                    image={post.thumbnail[1].src}
                    title={post.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                      {post.name}
                    </Typography>
                    <Typography component="p">{post.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
          </Grid>
      )}
    </Grid>
    </div>
    </div>

  );
};