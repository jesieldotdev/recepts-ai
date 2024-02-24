import { ThemeType } from "@/context/AppContext";
import styled from "styled-components";

interface ThemeProps{
  theme: ThemeType
}

export const AppBarContainer = styled.div<ThemeProps>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  .flex_container {
    display: flex;
    justify-content: space-between;
  }

  .greeting_message {
    color: ${theme => theme.theme.text};
    font-size: 16px;
    font-weight: 500;
  }

  .icon_btn{
    background-color: ${theme => theme.theme.accentColor};
  }

  .icon {
    border-radius: 8px;
    fill: ${theme => theme.theme.text};
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }

  .bg_primary {
    background-color: ${(theme) => theme.theme.accentColor}
    /* background-color: #fdcb19; */
  }
`;
