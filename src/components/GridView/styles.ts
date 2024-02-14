import styled from "styled-components";

export const GridViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  .name {
    text-align: center;
    margin-top: 8px;
    color: #906151;
    font-size: 12px;
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
    width: 100px;
    height: 100px;
  }
`;
