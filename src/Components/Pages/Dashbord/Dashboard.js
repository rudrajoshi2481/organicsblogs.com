import React from 'react'
import './css/Dashboard.css'
import ShowAllBlogs from './ListBlogs/ShowAllBlogs'
import MainEditor from './SlateEditor/MainEditor'

function Dashboard() {
    return (
        <div className="Dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            <MainEditor />
            {/* <div>
                <button>Write a new blog</button>
            </div>

            <div>
                <ShowAllBlogs/>
            </div>
             */}

        </div>
    )
}

export default Dashboard
