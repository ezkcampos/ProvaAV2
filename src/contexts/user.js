import React, {createContext,useState} from 'react';


const UsuarioContext = createContext ({});

const UsuarioProvider = ({children}) =>{

    const [user,setUser] = useState("EzK");

    return (
        <UsuarioContext.Provider value={{user}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioProvider}