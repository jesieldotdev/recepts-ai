import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Item = styled(ButtonBase)`
  padding: 16px;
  display : flex;
  flex-direction : column ;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #282828;
  height: 200px;
  border-radius :8px;

  font-weight: 600;
`;
