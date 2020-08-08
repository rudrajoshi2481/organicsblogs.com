import React from 'react'
import './css/Blogs.css'
import {Grid} from '@material-ui/core'
import Cards from '../../Utils/Cards/Card'
function Blogs() {
    return (
        <div>
            <div className="Cards-list-allblogs">
            <h1>All Blogs</h1>
           <Grid container spacing={3} >
               
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
           
           </Grid>
            </div>
        </div>
    )
}

export default Blogs
