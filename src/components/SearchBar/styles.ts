import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;

  .search {
    display: flex;
    flex-direction: row;
    font-size: 22px;
    height: 64px;
    min-width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 30px;
    justify-content: space-around;
    padding-left: 18px;
    padding-right: 32px;
  }

  .search input {
    /* min-width: 300px; */
    background-color: red;
    width: fit-content;
    background: transparent;
    border-style: none;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    color: #575757;
    font-family: "Poppins", sans-serif;
  }

  ::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400px;
  }

  input:focus:not(:placeholder-shown) + label {
    /* display: none ; */
  }

  .magnify {
    /* margin-left: 16px; */
  }

  .controls {
    /* margin-right: 16px; */
    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.1);
    background-color: #fefefe;
    border-radius: 8px;
  }
`;
