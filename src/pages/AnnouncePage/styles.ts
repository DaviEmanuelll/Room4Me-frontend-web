import styled from 'styled-components';

export const Container = styled.div`
  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  width: 100vw;
  height: 100vh;
  background-color: #ffdac2;
  display: flex;
  align-items: center;
  justify-content: center;

  #main-container {
    width: 90%;
    height: 80%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    h3 {
      font-weight: bold;
      color: #ff6700;
    }

    .room-data-container {
      height: 100%;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 0px 30px;

      @media (max-width: 1000px) {
        width: 100%;
      }

      div {
        width: 100%;
      }
    }

    .second-container {
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 0px 30px;

      .address-container {
        width: 100%;

        .first-line-address {
          display: flex;
          justify-content: space-between;
          margin: 20px 0px;
          gap: 20px;

          .street-input-group {
            width: 65%;
          }
          .number-input-group {
            width: 35%;
          }
        }

        .second-line-address {
          display: flex;
          justify-content: space-between;
          margin: 20px 0px;
          gap: 20px;

          .condominium-input-group {
            width: 100%;
          }
          .apartment-input-group {
            width: 60%;
          }
          .block-input-group {
            width: 60%;
          }
        }

        .third-line-address {
          display: flex;
          justify-content: space-between;
          margin: 20px 0px;
          gap: 20px;

          .district-input-group {
            width: 100%;
          }

          .cep-input-group {
            width: 100%;
          }

          .city-input-group {
            width: 100%;
          }

          .state-input-group {
            width: 100%;
          }
        }
      }

      .aspects-container {
        width: 100%;

        .first-line-aspects {
          display: flex;
          justify-content: space-between;
          margin: 20px 0px;
          gap: 20px;

          .room-type-input-group {
            width: 100%;
          }

          .bedrooms-input-group {
            width: 100%;
          }

          .bathrooms-input-group {
            width: 100%;
          }

          .capacity-input-group {
            width: 100%;
          }
        }

        .second-line-aspects {
          display: flex;
          justify-content: space-between;
          margin: 20px 0px;
          gap: 20px;

          .share-room-input-group {
            width: 100%;
          }

          .gender-input-group {
            width: 100%;
          }

          .allow-pets-input-group {
            width: 100%;
          }
        }

        button {
          margin-top: 20px;
        }
      }
    }
  }
`;
