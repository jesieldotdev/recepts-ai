import styled from "styled-components";

export const GreetingsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .message_text {
    font-size: 24px;
    font-weight: 700;
    color: #282828;
  }

  .highlighted_word {
    color: #fdcb19;
  }

  .icon_btn {
    border-radius: 8px;

    &:hover {
      background-color: #fdcb19;
    }
  }
`;
