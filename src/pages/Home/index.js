import React,{useContext} from 'react';
import {
    Main,
    Header,
    Content
} from './styles'
import {UsuarioContext} from '../../contexts/user';



let Home = ()=>{
    const {user, signOut} = useContext(UsuarioContext)

    let nome = user.email.split("@", 2);

    nome = nome[0];

    nome = nome.toUpperCase();

    return (
        <Main>
              <Header>
           <div id="logo">
                  <img src="/images/WebMenssagelogo.png" width="350px" alt=""/>
              </div>
           </Header>
             <Content> 
              
              <div class="main">
                <nav class="navegacao">
                    <ul class="navegacao-menu">
                        <li class="navegacao-menu--item"><a href="/chat">chat</a></li>
                        <li class="navegacao-menu--item"><a href="/about">about</a></li>
                        <li class="navegacao-menu--item"onClick={()=>{signOut()}}>sair</li>
                    </ul>
                </nav>
                <section class="body">
                    <h1 class="titulo">
                        Bem vindo, {nome}
                    </h1>

                    <article>
                        <p class="conteudo">
                            Converse com outras pessoas, por meio de mensagens!
                        </p>
                    </article>
                </section>
            </div>
           </Content> 
        </Main>
    );
}

export default Home;