

import React from 'react'
import {auth} from '../../../firebase/firebaseStater'
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

    
       
    

    return (
        <div>
            <p>{JSON.stringify(authData)}</p>
            
            <h1>Login</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            <button onClick={() => firebase.auth().signOut()}>Log Out</button>
        </div>
    )
}

export default Login
