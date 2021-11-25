import styled from "styled-components";

export const Header = styled.div`
   height:12vh;
   display:flex;
   align-items:center;
   justify-content:center;
`;

export const Content = styled.div`
    display:flex;
    flex:5;
    align-items:center;
   justify-content:center;
`;

export const Main = styled.div`
    display: flex;
    flex:10;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    .navegacao{
            height: 2rem;
            align-items:center;
            display: flex;
            justify-content: center;
            width: 75%;
            margin-bottom: 1rem;
            
        }
    .navegacao-menu{
        display: flex;
        justify-content: center;
        align-items:center;
        
    }
    .navegacao-menu--item{
        justify-content: center;
        flex:5;
        flex-direction:column;
        align-items:center;
        margin-left: 1rem;
        text-transform: uppercase;
        list-style: none;
        
    }
    .navegacao-menu--item a{
        text-decoration: none;
        color: black;
        justify-content: center;
        align-items:center;
        
    }
    .navegacao-menu--item a:hover{
        font-weight: bold;
    }
    .navegacao-menu--item:hover{
        cursor: pointer;
        text-decoration: underline;
        color: #AE1B73;
        
    }
    .navegacao-menu:nth-child(2){
        align-content: flex-end;
        color: red;
        background-color: red;
    }
    
    #btnLogout{
        flex: 1;
        align-items: flex-end;
        justify-content: center;
        align-items:center;
    } 
    #btnLogout:hover{
        background-color: #FF4500;
        transition: 0.5s;
    }
    .main{
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
        
        height: 30vw;
        width: 50vw;
    }
    header{
        align-self: center;
        justify-content: center;
        
        
    }
    header h1{
        color: black;
        opacity: 0.7;
    }
    
    .body{
        display: flex;
        justify-content: center;
        align-self: center;
        flex-direction: column;
        align-items: center;
        background-color: #AE1B73;
        border-radius: 30px;
        width: 30vw;
        height: 44vw;
        padding-bottom: 1rem;
    }
    .titulo{
        text-align: center;
        justify-content: center;
    }
    .conteudo{
        padding-left: 1rem;
        padding-right: 1rem;
        justify-content: center;
        text-align: center;
    }
    
`