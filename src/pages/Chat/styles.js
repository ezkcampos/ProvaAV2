import styled from 'styled-components';

export const Header = styled.div`
   height:10vh;
   display:flex;
   flex:5;
   align-items:center;
   justify-content:left;
   #logo{
    padding: 10px 25 0 0vw;
}

#pharse{
    padding-center:5vw;
    padding-top:20px;
}
`;

export const Content = styled.div`
    display:flex;
    flex:1;
    align-items:center;
   justify-content:center;
`;

export const Main = styled.div`
    display:flex;
    min-height:100vh;
    flex-direction:column;
`;