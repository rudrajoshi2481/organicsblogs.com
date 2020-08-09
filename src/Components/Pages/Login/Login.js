

import React from 'react'
import {app} from '../../../firebase/firebaseStater'
import {Authcontext} from '../../../Contexts/AuthContext'
import firebase from 'firebase'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



function Login() {

  

    const [authData,setAuthData] = React.useContext(Authcontext)

    const uiConfig = {
        signInFlow:'popup',
        signInSuccessUrl:'/dashboard',
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }

    
       
          React.useEffect(() => {
    firebase.auth().onAuthStateChanged(e => {
      if(e === null){
          console.log('NULL');
      }else{
          console.log(e.email);
          
        // const data = {userData:e.email,login:true}  
        // setAuthData({...authData,userData:e.email})  
        // setAuthData({...authData,login:true})
        setAuthData({...authData,userData:e.email,login:true})
      }
    })    

},[])

    

    return (
        <div>
            <p>{JSON.stringify(authData)}</p>
            
            <h1>Login</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            <button onClick={(e) => {firebase.auth().signOut()}}>Log Out</button>
        </div>
    )
}

export default Login
