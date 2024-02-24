import styled from "styled-components";

export const HomeContainer = styled.div`
  /* background-color: #fbe2ce; */
  max-height: 100vh;
  font-family: "Poppins", sans-serif !important;
  display: flex;
  flex-direction: column;
  background-color : ${props => props.theme.background};
    color: ${props => props.theme.text};

  .m-center {
    margin-left: auto;
    margin-right: auto;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  .mb-32 {
    margin-bottom: 32px;
  }
  .mt-64 {
    margin-top: 64px;
  }

  .ml-8 {
    margin-left: 8px;
  }
  .ml-16 {
    margin-left: 16px;
  }
  .mr-8 {
    margin-right: 8px;
  }
  .mr-16 {
    margin-right: 16px;
  }

  .pd-16 {
    padding-left: 16px;
    padding-right: 16px;
  }

  .search_button {
    background-color: #f59984;
    padding: 12px;
    position: fixed;
    top: 16px;
    right: 16px;
    margin-right: 8px;
    margin-left: auto;
    display: flex;
    /* z-index: -99; */
    /* left: 100%; */
  }

  /* .cooking_svg{
    position: relative;
    top: -72px;
    left: -32px;
    width: 100vw;
  } */

  .top_img {
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

  .bottom_nav {
   
  }
`;
