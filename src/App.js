import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

import './App.css'
import firebase from 'firebase'

import NavBar from './Components/Utils/Navbar/Navbar'
import About from './Components/Pages/About/About'
import HomePage from './Components/Pages/Homepage/HomePage'
import ErrorPage from './Components/Pages/Error/Error'
import Blogs from './Components/Pages/Blogs/Blogs'
import SpecificBlogs from './Components/Pages/SpecificBlogs/SpecBlogs'
import Dashboard from './Components/Pages/Dashbord/Dashboard'
import Login from './Components/Pages/Login/Login'

import {Authcontext} from './Contexts/AuthContext'



function App() {
  
  
  const [authData,setAuthData] = React.useContext(Authcontext)
  const [show,setShow] = React.useState(false)
  React.useEffect(() => {
      firebase.auth().onAuthStateChanged(e => {
        if(e == null){
            console.log('NULL');
        }else{
          setAuthData({...authData,login:true})
        }
      })    
  },[])

  return (
    <div className="App">
      <Router >
      <NavBar />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/nameblog" component={SpecificBlogs} />
        {/* <Route exact path="/dashboard" component={authData.login ? Dashboard : Login}/> */}
        <Route exact path="/dashboard" component={true ? Dashboard : Login}/>
        <Route  path="/**" component={ErrorPage} />
      </Switch>
    </Router>
    </div>
  )
}

export default App



// import React,{Suspense} from 'react';
// import './App.css';

// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import NavBar from './Components/Utils/Navbar/Navbar'
// import HomePage from './Components/Pages/Homepage/HomePage'
// import About from './Components/Pages/About/About'
// // const NavBar  = React.lazy(() => import('./Components/Utils/Navbar/Navbar'))
// const Error = React.lazy(() => import('./Components/Pages/Error/Error'))
// // const HomePage = React.lazy(() => import('./Components/Pages/Homepage/HomePage'))
// const Blogs = React.lazy(() => import('./Components/Pages/Blogs/Blogs'))
// const SpecificBlogs = React.lazy(() => import('./Components/Pages/SpecificBlogs/SpecBlogs'))
// // const About = React.lazy(() => import('./Components/Pages/About/About'))
// const Login = React.lazy(() => import('./Components/Pages/Login/Login'))

// function App() {


//   return (
//       <Router>
        
//         <NavBar />
        
//         <Switch>
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Route exact   path="/" component={HomePage}></Route>
//           </Suspense>

//           {/* <Suspense fallback={<h1>Loading...</h1>}> */}
//             {console.log('about')}
//             <Route exact   path="/about" component={About}></Route>
//           {/* </Suspense> */}

//           <Suspense fallback={<h1>Loading...</h1>}>
//             {console.log('Login')}
//             <Route  path="/login" component={Login}></Route>
//           </Suspense>

//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Route  path="/blogs" component={Blogs}></Route>
//           </Suspense>

//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Route  path='/name' component={SpecificBlogs}></Route>
//           </Suspense>

//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Route  path='/**'><Error /></Route>
//           </Suspense>


//         </Switch>
//       </Router>
//   );
// }

// export default App;
