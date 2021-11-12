import React, {useContext} from 'react';
import {Route as RectDOMRoute, useHistory} from 'react-router-dom';

import {UsuarioContext} from '../contexts/user';

const Route = ({ 
    isPrivate= false,
    Component: Component,
    ...rest
    })=>{
        
        const {user, loading} = useContext(UsuarioContext)

        const history = useHistory();

        if(loading){
            return(
                <div>
                    <p>...carregando...</p>
                </div>
            )
        }
      
        //const user = null


        if (!(isPrivate === !!user)){
            history.push(isPrivate ? '/login':'/main');
        }

        return(
            <RectDOMRoute {...rest}
                render={(props)=>{
                    return(
                        <Component {...props} />
                    )
                }}
                />
        )
}

export default Route;