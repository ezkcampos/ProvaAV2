import React,{useContext,useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {
    Main,
    Header,
    Content,
    Footer,
    ContainerLogoPharse,
    ContainerSignIn
} from './styles'

let Login=()=>{

    const {signIn,signUp} = useContext(UsuarioContext);

    let email = useState('');
    let password = useState('');
    
    //const [email,setEmail] = useState(null);
    //const [password,setPassword] = useState(null);

    const handleLogin = async () =>{
        try {
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signIn(email, password)
        }catch(err){
          console.log(err)
        }
      }
    
      const handleCadastrar = async () =>{
        try {
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signUp(email, password)
        }catch(err){
          console.log(err)
        }
      }


    return(
       <Main>
           <Header>
             
           </Header>

           <Content>
             
             <ContainerLogoPharse>
             <div id="logo">
                  <img src="/images/logo_branco.png" width="290px" alt=""/>
              </div>
              <div id="pharse">
                <p>Problemas para formar</p>
                <p>um grupo de trabalho?</p>
                <p>o Web Menssage resolve!</p>
              </div>
            </ContainerLogoPharse>
            
            <ContainerSignIn>
                <div id="containerLogin">
                    <div id="containerButtons">
                        <div class="button">
                            Membro
                         </div>
                         <div class="button inativo">
                            Convidado
                         </div>    
                     </div>   
                     <div class="box">
                            <label for="emailLogin" class="title">Email</label>
                            <input placeholder="Digite seu Email" type="text" id="emailLogin"/>
                     </div>
                     <div class="box">
                            <label for="senhaLogin" class="title">Senha</label>
                            <input placeholder="Digite sua Senha" type="password" id="senhaLogin"/>
                     </div>

                    <div class="forgotCredentials">Esqueci minha senha </div>
                    <div id="containerLoginOrJoin">
                        <div class="button invert" onClick={handleCadastrar}>
                            Cadastre-se
                        </div> 
                        <div class="button" onClick={handleLogin}>
                            Entrar
                        </div>  
                    </div>    

                </div>
                
            </ContainerSignIn>
             
           </Content>

           <Footer>
            <div id="Logo">
                <img src="/images/logo_branco.png" width="120px" alt=""/>
            </div>

            <div id="about">
                <p>Contato</p>
                <p>ezequiel@grupou.com</p>
            </div>

            <div id="Social">
                <img src="/images/logo_linkedin.png" width="50px" alt=""/>
                <img src="/images/logo_face.png" width="50px" alt=""/>
                <img src="/images/logo_insta.png" width="50px" alt=""/>
            </div>
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