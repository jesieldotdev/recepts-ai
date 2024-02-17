import styled from "styled-components";

export const AppBarContainer = styled.div`
  .flex_container {
    display: flex;
    justify-content: space-between;
  }

  .greeting_message{
    color: #929292;
    font-size: 16px;
    font-weight: 500;
  }

  .icon_btn {
    border-radius: 8px;

    &:hover {
      background-color: #fdcb19;
    }
  }
`;
