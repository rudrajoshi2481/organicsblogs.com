import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core'

function Cards() {
    return (
        <Card style={{maxWidth:354}}>
        <CardActionArea>
            <img style={{maxHeight:354,maxWidth:354,backgroundSize:'cover',display:'flex',marginLeft:'auto',marginRight:'auto'}} src={'https://source.unsplash.com/random'}/>
            {/* <CardMedia style={{height:'140'}} title="Image" image="https://source.unsplash.com/random"/> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">What is Bacteria ?</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
<Button size="small" color="primary">
  Share
</Button>
<Button size="small" color="primary">
  Learn More
</Button>
</CardActions>
    </Card>
    )
}

export default Cards
