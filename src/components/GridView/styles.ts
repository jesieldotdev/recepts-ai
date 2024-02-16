import styled from "styled-components";
import ButtonBase from '@mui/material/ButtonBase';

export const GridViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px;

  .name {
    text-align: center;
    margin-top: 8px;
    color: #906151;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .grid_item_wrapper {
    background-color: #fefefe;
    /* padding: 32px; */
    width: 100%;
    min-width: 100px;
    text-align: center;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    .cover {
      /* width: 100px; */
      width: 100%;
      height: 100px;
      object-fit: cover;
    }
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
    height: 100px;
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

export const GridItem = styled(ButtonBase)`
  background-color: #fefefe;
  /* padding: 32px; */
  width: 100%;
  min-width: 100px;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  .cover {
    /* width: 100px; */
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;
