import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";
import { ThemeType } from "@/context/AppContext";

interface ThemeProps {
  theme: ThemeType;
}

export const ManageContainer = styled.div<ThemeProps>`
  background-color: ${(theme) => theme.theme.background};
  color: ${(theme) => theme.theme.text};
  height: 100vh;

  .icon {
    min-width: 64px;
    min-height: 64px;
    max-width: 64px;
    max-height: 64px;
    fill: ${(theme) => theme.theme.text};
  }
  
  .box_shadow{
    box-shadow:  0  4px  6px rgba(0,  0,  0,  0.1);
  }
`;

export const GridContainer = styled.div<ThemeProps>`
  display: grid;
  gap: 16px;

  /* Estilos para extra pequeno (xs) */
  @media (max-width: 255px) {
    grid-template-columns: repeat(1, 1fr);
    /* Seu CSS aqui */

  }
  @media (min-width: 256px) and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    /* Seu CSS aqui */

  }

  /* Estilos para pequeno (sm) */
  @media (min-width: 577px) and (max-width: 768px) {
    /* Seu CSS aqui */
    grid-template-columns: repeat(3, 1fr);
  }

  /* Estilos para médio (md) */
  @media (min-width: 769px) and (max-width: 992px) {
    /* Seu CSS aqui */
    grid-template-columns: repeat(3, 1fr);
  }

  /* Estilos para grande (lg) */
  @media (min-width: 993px) and (max-width: 1200px) {
    /* Seu CSS aqui */
    grid-template-columns: repeat(4, 1fr);
  }

  /* Estilos para extra grande (xl) */
  @media (min-width: 1201px) {
    /* Seu CSS aqui */
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled(ButtonBase)<ThemeProps>`
  background-color: ${(theme) => theme.theme.cardBackground};
  color: ${(theme) => theme.theme.text};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  font-weight: 600;
`;
