import React from 'react';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>Home!</h1>
            <Link  to={{
                pathname: "/about", 
                state: {
                    nome: 'Antonio',
                    idade: 36
                }
            }}>Ir para página Sobre</Link>
        </div>
    )
} 

export default Home