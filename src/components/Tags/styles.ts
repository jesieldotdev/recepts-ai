import { IconButton } from "@mui/material";
import styled from "styled-components";

export const TagsContainer = styled.div`
  max-width: 100%;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

@sc

`;

export const TagItem = styled(IconButton)`
  background-color: #eee;
  border-radius: 32px;
  padding: 8px;
  width: fit-content;

  p {
    text-align: center;
    font-size: 14px;
  }
`;
