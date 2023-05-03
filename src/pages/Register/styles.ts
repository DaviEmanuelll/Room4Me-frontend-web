import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0;
  height: 100%;

  @media (min-width: 1300px) {
    margin: 0px 100px 0px 900px;
  }

  button {
    margin-top: 12px;
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
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0px 10px 0px;
  }

  .buttons-group {
    display: flex;
    gap: 10px;
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

  #create-new-account {
    text-decoration: none;
    color: #ff6700;
  }
`;
