import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0;
  height: 100%;

  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  @media (min-width: 1300px) {
    margin: 0px 100px 0px 900px;
  }

  button {
    margin-top: 10px;
  }

  main {
    width: 80%;
  }

  span {
    color: #ff0033;
    font-size: 14px;
  }

  .span-area {
    height: 8px;
    margin: 10px 0px;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .header-info {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0px 10px 0px;
  }

  .buttons-group {
    display: flex;
    gap: 15px;
    margin: 15px 0px;
  }

  .extra-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0px 25px 0px;
  }

  #logo {
    width: 212px;
    height: 48px;
  }

  #profile-image-group {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      height: 80px;
      width: 80px;
    }
  }

  #create-new-account {
    text-decoration: none;
    color: #ff6700;
  }
`;
