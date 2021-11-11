import React, { Component } from "react";
import {Route as RectDOMRoute, useHistory} from 'react-router-dom';

const Route = ( 
    isPrivate= false,
    component: Component,
    ...rest
    )=>{
        
        const history = useHistory();

        const user = {
            nome:'ezequiel'
        }

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