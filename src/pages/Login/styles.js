import styled from 'styled-components';

export const Main = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;

export const Header = styled.div`
   height:15vh;
   display:flex;
   align-items:center;
   justify-content:center;
`;

export const Content = styled.div`
    display:flex;
    flex:1;
`;

export const ContainerLogoPharse = styled.div`
    display:flex;
    flex:2;
    background-color:#e6e;
    flex-direction:column;
    #logo{
        padding: 50px 0 0 2vw;
    }
    
    #pharse{
        padding-left:5vw;
        padding-top:20px;
    }

    #pharse p{
        font-size:30px;
        color:#fff;
        line-height:12px;
    }
`;

export const ContainerSignIn = styled.div`
    display:flex;
    flex:1;
    background-color:#e6e;
    min-width:500px;
    align-items:center;

    #containerLogin{
        width:20vw;
        background-color:#fff;
        min-width:350px;
        border-radius:15px;
        display:flex;
        flex-direction:column;
        padding:20px;
        box-sizing: border-box;
        color:#333;
    }

    #containerLogin #containerButtons{
        display:flex;
        flex-directions:row;
    }

    #containerLogin #containerButtons .button{
        
        padding-bottom: 10px;
        justify-content:center;
        align-items:center;
        flex:1;
        margin:0px 5px;
        color:#673f66;
        cursor:pointer;
        text-align:center;
    }

    #containerLogin #containerButtons .inativo{
        border:nome;
        color:#e6e6e6;
    }

    #containerLogin #containerButtons .inativo:hover{
        border-bottom:4px solid #AE1B73;
        color:#673f66;
        cursor: default;
    }

    .box{
        display:flex;
        flex-direction:column;
        margin-top:30px;
    }

    .box .title{
        color:#ccc;
        font-size:15px;
        margin-bottom:5px;
    }

    .box input{
        border:1px solid #ccc;
        height:50px;
        border-radius:10px;
        padding: 0 20px;
        margin-top:5px;
    }

    #containerLoginOrJoin{
        display:flex;
        flex-direction:row;
    }

    #containerLoginOrJoin .button{
        display:flex;
        height:50px;
        background-color:#AE1B73;
        border-radius:10px;
        border:1px solid #AE1B73;
        justify-content:center;
        align-items:center;
        color:#fff;
        flex:1;
        margin-top:40px;
        cursor:pointer;
    }
    #containerLoginOrJoin .button:hover{
        opacity:0.9;
    }

    #containerLoginOrJoin .button:first-child{
        margin-right:15px;
    }

    #containerLoginOrJoin .invert{
        background-color:#fff;
        color:#AE1B73; 
    }

    #containerLoginOrJoin .invert:hover{
        background-color:#AE1B73;
        color:#fff;
    }

    .forgotCredentials{
        color:#AE1B73;
        display:flex;
        justify-content:flex-end;
        font-size:13px;
        margin-top:5px;
        cursor:pointer;
    }
`;

export const Footer = styled.div`
    display:flex;
    height:15vh;
    background-color:#e6e;

    #logo{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    #about{
        flex:4;
        display:flex;
        justify-content:center;
        flex-direction:column;
    }

    #about p{
        font-size:12px;
        line-height:1px;
    }

    #social{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
    }
`;