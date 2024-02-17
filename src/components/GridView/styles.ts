import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";

export const GridViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;

  .grid_item_wrapper {
    background-color: #fefefe;
    /* padding: 32px; */
    width: 100%;
    min-width: 132px;
    text-align: center;
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
  padding: 4px;
  width: 100%;
  min-width: 132px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  .cover {
    /* width: 100px; */
    width: 100%;
    border-radius: 8px;
    /* border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px; */
    height: 100px;
    height: 100px;
    object-fit: cover;
  }

  .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 4px;
  }

  .name,
  .time {
    text-align: center;
    margin-top: 8px;
    color: #383838;
    font-size: 14px;
    font-weight: 800;
  }

  .time {
    font-size: 10px;
    /* position: relative;
    top: -44px;
    left: -16px;
    color: #fefefe;
    padding: 4px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.3); */
  }
`;
