import styled from "styled-components";

export const ScrollHorizontalContainer = styled.div`
  color: #575757;

  overflow-x: auto;
  /* justify-content: center; */
  /* justify-self: center; */
  /* align-items: center; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  // width: 100%;

  .wrapper {
    display: flex;
    gap: 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
  }

  .icon_btn {
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 30px;
  }

  .icon_btn:focus {
      background-color: #fdcb19;
    }
`;
