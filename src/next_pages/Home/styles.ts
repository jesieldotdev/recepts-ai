import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #fbe2ce;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif !important;

  .mt-8{
    margin-top: 8px;
  }
  .mt-16{
    margin-top: 16px;
  }
  .mt-32{
    margin-top: 32px;
  }
  .mb-32{
    margin-bottom: 32px;
  }
  .mt-64{
    margin-top: 64px;
  }

  .pd-16{
    padding: 16px;
  }

  .search_button {
    background-color: #f59984;
    padding: 8px;
    position: fixed;
    top: 16px;
    right: 16px;
    margin-right: 8px;
    margin-left: auto;
    display: flex;
    z-index: -99;
    /* left: 100%; */
  }

  /* .cooking_svg{
    position: relative;
    top: -72px;
    left: -32px;
    width: 100vw;
  } */

  .top_img{
    /* width: 100vw; */
    /* position: relative; */
    /* top: 0px; */
    /* left: 0px; */
    height: 300px;
    width: 100vw;
    object-fit: cover;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    

  }

  .bottom_nav{
    border-radius: 32px;
    position: fixed;
    left: 50%; /* Centralizar horizontalmente */
    transform: translateX(-50%); /* Corrigir para que o elemento fique centrado */
    bottom: 16px;
    width: 90vw; /* Defina o tamanho desejado */
    max-width: 500px; /* Defina um tamanho máximo */
    margin: 0 auto; /* Centralizar horizontalmente */
    background-color: white; /* Adicione uma cor de fundo para o bottom navigation */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adicione uma sombra */
    display: flex;
    justify-content: space-around; /* Distribuir os itens uniformemente */
    align-items: center; /* Centralizar verticalmente */
    height: 72px;
    font-size: 14px; /* Defina o tamanho da fonte */
    .custom_label {
        color: #906151;
        font-family: 'Poppins', sans-serif !important;
    }
  }
`;
