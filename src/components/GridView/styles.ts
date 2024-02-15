import styled from "styled-components";

export const GridViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  .name {
    text-align: center;
    margin-top: 8px;
    color: #906151;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .skeleton-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.skeleton-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc; /* Cor do esqueleto */
  animation: pulse 1.5s infinite alternate; /* Animação do esqueleto */
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;

export const GridItem = styled.div`
  background-color: #fefefe;
  /* padding: 32px; */
  width: 100%; /* Define a largura para 100% da largura do contêiner pai */
  min-width: 100px; /* Define o tamanho mínimo para cada item */
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.3);

  .cover {
    /* width: 100px; */
    width: 100%;
    height: 10   NZB0px;
    object-fit: cover;
  }
`;
