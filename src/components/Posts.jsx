import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
function Posts(props) {
  let videos = props.video_list;
  return (
    <div style={{ marginTop: 20, padding: 30, marginLeft:40}}>
      <Grid container spacing={40} justify="left">
        {videos && videos.map((post,i) => (
          <Grid item key={i}>
            <Link to = "/videos" style = {{textDecoration: "none"}}>
              <div key={i} onClick={(e) => props.setSource(e,post.id)}>
              <Card style = {{width:320, height:250, margin:10}}>
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;