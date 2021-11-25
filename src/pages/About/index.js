import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {
    Main,
    Header,
    Content,
    ContainerBotoes,
    ContainerBotoesH
} from './styles'

function About(){

    let location = useLocation();
    let history = useHistory();

    const handleClick = () =>{
        history.push('/chat')
    }

    const handleClickhome = () =>{
        history.push('/main')
    }

    return(
        <Main>
            <Header>
           <div id="logo">
                  <img src="/images/WebMenssagelogo.png" width="350px" alt=""/>
              </div>
                </Header>

                <Content>
        <div>
            <h1>About</h1>
            <p>Contato:</p>
            <p>camposezek@gmail.com</p>
            <ContainerBotoes>
            <div>
            <div class="button" onClick={handleClick}>Ir para o chat</div>
            </div>
            </ContainerBotoes>
            <ContainerBotoesH>
            <div>
            <div class="button" onClick={handleClickhome}>Voltar para Home</div>
            </div>
            </ContainerBotoesH>
        </div>
                </Content>
    
    
    </Main>
    )
} 
    
export default About