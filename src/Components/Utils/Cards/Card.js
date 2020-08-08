import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Grid,Button} from '@material-ui/core'


function Cards({blogIntro,blogTitle}) {
    return (
        <Grid item xs={3}>
            <Card style={{maxWidth:354}} >
        <CardActionArea>
            {/* <img style={{maxHeight:354,maxWidth:354,backgroundSize:'cover',display:'flex',marginLeft:'auto',marginRight:'auto'}} src={'https://source.unsplash.com/random'}/> */}
            {/* <CardMedia style={{height:'140'}} title="Image" image="https://source.unsplash.com/random"/> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{blogTitle}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {blogIntro}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
<Button size="small" color="primary">
  Share
</Button>
<Button size="small" color="primary">
  Read More
</Button>
</CardActions>
    </Card>
        </Grid>
    )
}

export default Cards
