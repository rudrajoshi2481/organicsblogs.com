import React from 'react';

export const Authcontext = React.createContext()


export const AuthcontextProvider = props => {

    const [authData,setAuthData] = React.useState(false)

    return(
        <Authcontext.Provider value={[authData,setAuthData]}>
            {console.log(authData)}
            {props.children}
        </Authcontext.Provider>
    )
}