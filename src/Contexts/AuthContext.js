import React from 'react';

export const Authcontext = React.createContext()


export const AuthcontextProvider = props => {

    const [authData,setAuthData] = React.useState({
        login:false,
        editorData:[
            {
                type: 'paragraph',
                children: [{ text: 'A line of text in a paragraph.' }],
              },
        ],
        
    })

    return(
        <Authcontext.Provider value={[authData,setAuthData]}>
            {console.log(authData)}
            {props.children}
        </Authcontext.Provider>
    )
}