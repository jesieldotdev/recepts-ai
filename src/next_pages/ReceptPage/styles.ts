import styled from "styled-components";

export const ReceptContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  .ml-8 {
    margin-left: 8px;
  }
  .ml-16 {
    margin-left: 16px;
  }

  .pd-8 {
    padding: 16px;
  }
  .pd-16 {
    padding: 16px;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  .mt-32 {
    margin-top: 32px;
  }

  .img_cover {
    height: 200px;
    width: 100vw;
    object-fit: cover;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 10px 12px 35px 10px;
  }
`;

export const Header = styled.div`
  .title {
    font-weight: 700;
    font-size: 26px;
    color: #282828;
  }

  .info {
    display: flex;

    .item {
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 8px;

      p {
        display: flex;
        margin-right: 8px;
      }
    }
  }
`;

export const Description = styled.div``;

export const Content = styled.div`
  .title {
    font-weight: 600;
    font-size: 18px;
    color: #282828;
    border-style: none;
    background-color: none;
  }


    .preparation {
      .title {
        border-style: none;
      
      }

      .step {
        border-style: solid;
        border-top-style: none;
        border-right-style: none;
        /*border-left-style: none;*/
        border-bottom-style: none;
        display: flex;
        
      }

      .item {
        font-weight: 600;
        font-size: 24px;
        line-height: 1;
        margin-right: 16px;
      }
    }
  .ingredients {
    margin-bottom: 16px;
    .item {
      border-style: solid;
      /*background-color: #c4c4c4;*/
      border-left-color: #fdcb19;
      border-left-width: 4px;
      padding-left: 14px;
      border-top-style: none;
      border-right-style: none;
      border-bottom-style: none;
      border-radius: 3px;
      margin-top: 16px;
    }


    .pills {
      display: flex;
      overflow-x: scroll;
      margin-bottom: 200px;
      p {
        padding: 7px;
        background-color: #efebe9;
        margin-right: 20px;
        font-weight: 600;
        border-radius: 34px;
        font-size: 14px;
      }
    }
  }
`;
