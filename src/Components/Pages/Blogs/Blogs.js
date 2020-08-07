import React from 'react'
import './css/Blogs.css'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button,Grid} from '@material-ui/core'
import Cards from '../../Utils/Cards/Card'
function Blogs() {
    return (
        <div>
            <h1>blogs</h1>
            <div className="Cards-list-allblogs">
           
           <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
           
            </div>
        </div>
    )
}

export default Blogs
