import React,{Suspense} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

import './App.css'
import firebase from 'firebase'

import NavBar from './Components/Utils/Navbar/Navbar'


import {Authcontext} from './Contexts/AuthContext'
const About = React.lazy(() => import('./Components/Pages/About/About'))
const HomePage = React.lazy(() => import('./Components/Pages/Homepage/HomePage'))
const ErrorPage = React.lazy(() => import('./Components/Pages/Error/Error'))
const Blogs = React.lazy(() => import('./Components/Pages/Blogs/Blogs'))
const Dashboard = React.lazy(() => import('./Components/Pages/Dashbord/Dashboard'))
const SpecificBlogs = React.lazy(() => import('./Components/Pages/SpecificBlogs/SpecBlogs'))
const Login = React.lazy(() => import('./Components/Pages/Login/Login'))

function App() {
  
  
  const [authData,setAuthData] = React.useContext(Authcontext)
  const [show,setShow] = React.useState(false)

  

  return (
    <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
      <Router >
      <NavBar />
      
      <Switch>
        <Route  path="/login" component={Login} />
        
          <Route  path="/about" component={About} />
        
        <Route path="/blogs" component={Blogs} />
        
        <Route exact path="/nameblog" component={SpecificBlogs} />
        
        <Route exact path="/dashboard" component={authData.login ? Dashboard : Login}/>
        {/* <Route exact path="/dashboard" component={true ? Dashboard : Login}/> */}
        
        <Route exact path="/" component={HomePage} />
        <Route  path="/**" component={ErrorPage} />
      </Switch>
    </Router>
        </Suspense>
    </div>
  )
}

export default App

