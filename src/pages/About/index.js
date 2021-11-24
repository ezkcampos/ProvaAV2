import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';

function About(){

    let location = useLocation();
    let history = useHistory();

    const handleClick = () =>{
        history.push('/chat')
    }

    return(
        <div>
            <h1>About</h1>
            <p>Contato:</p>
            <p>camposezek@gmail.com</p>
            <button type="button" onClick={handleClick}> Ir para o Chat </button>
        </div>
    )
} 

export default About