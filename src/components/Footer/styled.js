import styled from 'styled-components';

export const Box = styled.div`
  //border: 1px solid blue;
  padding: 20px;
  background: #264653;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 24%;

`;

// export const Cabeca = styled.h1`
// font-size: 10px,
// `;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto ;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 139px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(300px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: orange;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Infos = styled.div`
text-align: center;
color: white
`