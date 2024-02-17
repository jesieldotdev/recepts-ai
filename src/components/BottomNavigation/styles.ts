import BottomNavigation from "@mui/material/BottomNavigation";
import styled from "styled-components";

export const BottomNavContainer = styled(BottomNavigation)`
  border-radius: 46px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;

  gap: 16px;
  overflow: hidden;
  padding: 12px;
  .root {
    height: 100%;
    width: 100%;
  }

  .icon {
    width: 28px;
  }

  .item {
    background-color: #fdcb19;
    padding: 12px;
    border-radius: 12px;
  }

  .on {
    fill: #383838;

    .custom_label {
      display: none;
    }
  }
  .custom_label {
    color: #fefefe;
    font-size: 12px;
    display: none;
  }
`;
