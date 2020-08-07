import React from 'react'
import './css/Dashboard.css'
import ShowAllBlogs from './ListBlogs/ShowAllBlogs'
import MainEditor from './SlateEditor/MainEditor'

function Dashboard() {

    const [whatToShow,setWhatToShow] = React.useState(1)

    return (
        <div className="Dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            <button onClick={e => setWhatToShow(!whatToShow)}>{whatToShow ? 'Show Blogs' : 'Show Editor'}</button>
            {
                whatToShow ?  <MainEditor /> : null
            }




        </div>
    )
}

export default Dashboard
