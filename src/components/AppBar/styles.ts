import styled from "styled-components";

export const AppBarContainer = styled.div`
background-color : ${props => props.theme.background};
    color: ${props => props.theme.text};
  .flex_container {
    display: flex;
    justify-content: space-between;
  }

  .greeting_message {
    color: #929292;
    font-size: 16px;
    font-weight: 500;
  }

  .icon_btn {
    border-radius: 8px;
  }

  .bg_primary {
    background-color: #fdcb19;
  }
`;
