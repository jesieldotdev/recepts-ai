import styled from "styled-components";

export const ScrollHorizontalContainer = styled.div`
  display: flex;
  color: #575757;
  font-size: 12px;
  font-weight: 600;
  overflow-x: scroll;
  gap: 8px;
  justify-content: center;
  justify-self: center;
  align-items: center;


  &::-webkit-scrollbar {
    display: none;
  }

  .carrossel-item {
    justify-content: center;
    align-items: center;
  }

  .icon_btn {
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 30px;
  }
  .carrossel-menu .icon_btn:hover {
    background-color: #ffd634;
  }
`;
