import styled from "styled-components";

export const Header = styled.div`
   height:10vh;
   display:flex;
   align-items:center;
   justify-content:left;
`;

export const Main = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;

export const Content = styled.div`
    display:flex;
    flex:1;
`;

export const ContainerBotoes = styled.div`
    display:flex;
    flex:5;
    margin:0px 5px;
    flex-directions:row;
    background-color:#FAFAFA;
    padding:10px;
  font-size: 15px;
  color: #000000;
    cursor:pointer;
    padding-bottom: 8px;
        justify-content:center;
        border-radius:12px;
        align-items:left;
        text-align:center;
`;

export const ContainerBotoesH = styled.div`
    display:flex;
    flex:5;
    margin:10px 5px;
    flex-directions:row;
    background-color:#FAFAFA;
    padding:10px;
  font-size: 15px;
  color: #000000;
    cursor:pointer;
    padding-bottom: 8px;
        justify-content:center;
        border-radius:12px;
        align-items:left;
        text-align:center;
`;