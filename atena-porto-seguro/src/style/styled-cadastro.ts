import styled from 'styled-components';

export const StyleCabecalhoAzul = styled.header`
    display: flex;
    background-color: #3da3d0;
    padding: 2.6em;
    justify-content: center;
    position: static;
`;

export const StyleGradient = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #68ee86, #3da3d0);
    flex-wrap: wrap;
    align-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    position: fixed;
`;

export const StyleIntegrantesInfo = styled.div`
    margin-top: 6vh;
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-items: center;

`;

export const StyleRepositorioContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border: inset 0.15vw rgb(153, 0, 255);
    margin-bottom: 6vh;
    width: 28vw;
`;

export const StyleRodapeIntegrantes = styled.footer`
    margin-top: 4vh;
    font-size: 100%;
`;