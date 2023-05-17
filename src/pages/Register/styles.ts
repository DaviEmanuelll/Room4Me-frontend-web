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

  #avatar-input-group {
    border: 1px solid #4c4652;
    border-radius: 16px;

    width: 236px;
    height: 128px;
    margin-inline: auto;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;

    &:hover {
      border-color: #ff6700;
    }

    label {
      position: absolute;
      top: -18px;
      background-color: #fff;
      padding-inline: 6px;
      font-size: 24px;
    }

    input {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      opacity: 0;
      cursor: pointer;

      position: absolute;
      top: 0;
      left: 0;
    }
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
      height: 72px;
      width: 72px;
      border-radius: 50%;
    }
  }

  #create-new-account {
    text-decoration: none;
    color: #ff6700;
  }
`;
