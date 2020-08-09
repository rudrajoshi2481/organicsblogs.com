import React from 'react'
import './css/Blogs.css'
import {Grid} from '@material-ui/core'
import Cards from '../../Utils/Cards/Card'
// import {useQuery} from 'react-query'

import {Auth, firestore} from '../../../firebase/firebaseStater'
import firebase from 'firebase'


function Blogs() {

    const [data,setData] = React.useState([])

    React.useEffect(() => {
        const fetchBlogs = async () => {
            await firestore
                .collection('blogs')
                .get()
                .then(snap => {
                    const totalData = []
                    snap.forEach(e => {
                        // const data = e.data()
                        totalData.push(e.data())
                        console.log(e.data());
                        
                    })
                    setData(totalData)
                })
                .catch(err => console.log(err))
        }

        fetchBlogs()
    },[])

    // const {data,status} = useQuery('blogs',fetchBlogs)

    return (
        <div>
            
            <div className="Cards-list-allblogs">
            <h1>All Blogs</h1>
            

           <Grid container spacing={3} >
           {
               data.map((blog => {
                   
                   return <Cards blogTitle={blog.blogTitle} blogIntro={blog.blogIntro}/>
               }))
           }    
           
           </Grid>
            </div>
        </div>
    )
}

export default Blogs
