import React from 'react';

export const Authcontext = React.createContext()


export const AuthcontextProvider = props => {

    const [authData,setAuthData] = React.useState(
        {
            login:false,
            authdata:null
        }
    )

    return(
        <Authcontext.Provider value={[authData,setAuthData]}>
            {props.children}
        </Authcontext.Provider>
    )
}