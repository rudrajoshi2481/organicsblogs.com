import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

import './App.css'

import NavBar from './Components/Utils/Navbar/Navbar'
import About from './Components/Pages/About/About'
import HomePage from './Components/Pages/Homepage/HomePage'
import ErrorPage from './Components/Pages/Error/Error'
import Blogs from './Components/Pages/Blogs/Blogs'
import SpecificBlogs from './Components/Pages/SpecificBlogs/SpecBlogs'
import Dashboard from './Components/Pages/Dashbord/Dashboard'
import Login from './Components/Pages/Login/Login'


const ProtectedRoutes = ({component:Component,...rest}) => {
  // Add firebase auth every time someone visits this route it will check
  // return <Route {...rest} render={props => firebase.Auth() ? <Component {...props}/> : <Redirect to='/dashboard' />}/>
}

function App() {
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
        <Route exact path="/**" component={ErrorPage} />
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
