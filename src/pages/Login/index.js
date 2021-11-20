import React, {useContext, useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {
    Main,
    Header,
    Content,
    Footer
} from './styles'

function Login(){

    const {signIn,signUp} = useContext(UsuarioContext);

    const [email,setEmail] = useState('ezk@fgv.com');
    const [password,setPassword] = useState('123456');

    async function handleLogin() {
        try {
            await signIn(email, password);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleCadastrar() {
        try {
            await signUp(email, password);
        } catch (err) {
            console.log(err);
        }
    }


    return(
       <Main>
           <Header>
                <p>Header</p>
           </Header>

           <Content>
           <p>Content</p>
           </Content>

           <Footer>
           <p>Footer</p>
           </Footer>
       </Main>
        
        //<div>
            //<h1>Login</h1>
            //<button type="button" onClick={handleCadastrar}>Cadastro</button>
            //<button type="button" onClick={handleLogin}>Logar</button>
        //</div>
    )
} 

export default Login