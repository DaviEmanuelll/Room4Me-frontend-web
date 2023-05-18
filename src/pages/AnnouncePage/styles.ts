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
      height: 1100px;
      margin-top: 580px;
      margin-bottom: 30px;
    }

    h3 {
      font-weight: bold;
      color: #ff6700;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 30px 0px 10px 0px;
    }

    #room-image-input-group {
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
        background-color: #fffcf9;
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

    #image-group {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        height: 72px;
        width: 72px;
        border-radius: 50%;
      }
    }

    #description-input {
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.75px;
      line-height: 14px;
      display: block;
      width: 100%;
      border-radius: 12px;
      background: transparent;
      border: solid 1.5px #4c4652;
      color: rgb(33, 33, 33);
      padding: 15px;
      outline: none;
    }
    .room-data-container {
      height: 100%;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 30px 30px;
      padding: 0px 30px;

      @media (max-width: 1000px) {
        width: 100%;
      }

      div {
        width: 100%;
      }
    }

    .second-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 0px 20px;
      padding: 0px 30px;

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
          .complement-input-group {
            width: 100%;
          }
          .block-input-group {
            width: 100%;
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
          align-items: center;
          margin: 20px auto;
          gap: 10px;

          .garage-input-group {
            width: 100%;
          }

          .furnished-input-group {
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
          @media (max-width: 1000px) {
            margin-bottom: 50px;
          }
        }
      }
    }
  }
`;
