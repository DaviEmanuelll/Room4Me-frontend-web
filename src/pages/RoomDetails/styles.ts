import styled from 'styled-components';

export const Container = styled.div`
  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  .first-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -100px;
    @media (max-width: 1300px) {
      margin-bottom: 200px;
    }

    .image-slider {
      width: 80%;
      height: 70%;
      background-color: none;
      display: flex;
      position: relative;
      align-items: center;
      margin: 50px 0px;
    }

    .image-slider button {
      width: 36px;
      height: 36px;
      position: absolute;
      border: none;
      background-color: rgba(255, 252, 249, 0.7);
      border-radius: 100%;
    }

    .image-arrow {
      width: 32px;
      height: 32px;
      background: rgba(255, 252, 249, 0.7);
      border-radius: 100%;
    }

    #arrow-back {
      top: 42%;
      left: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #arrow-forward {
      top: 42%;
      right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #image-selector-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: absolute;
      gap: 1px;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    #image-selector {
      color: #4c4652;
      font-weight: bold;
      font-size: 50px;
      cursor: pointer;
    }

    .image-slider button:hover {
      background-color: rgba(255, 252, 249, 0.578);
      cursor: pointer;
    }

    .images-container {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background-size: cover;
      background-position: center;
    }
  }

  .second-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 1300px) {
      flex-direction: column;
      gap: 50px;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
        height: 24px;
      }
    }

    .room-details-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0px 50px;

      .button-container {
        display: flex;
        width: 100%;
        gap: 20px;
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          margin-top: 150px;
          margin-bottom: 20px;
        }
      }
    }

    #title {
      font-weight: bold;
    }

    #publish-at {
      color: #A6A6A6;
    }

    .address-container {
      display: flex;
      flex-direction: column;
      .full-address-container {
        display: flex;
        gap: 2px;
      }
    }

    .rent-period-container {
      display: flex;
      flex-direction: column;

      #rent-period-title {
        font-weight: bold;
      }
    }

    .aspects-container {
      display: flex;
      justify-content: space-around;

      label {
        font-weight: bold;
      }

      .aspect-container {
        display: flex;
        flex-direction: column;
      }
    }

    .description-container {
      text-align: justify;

      #description-title {
        font-weight: bold;
      }
    }
    .value-and-contacts-group {
      width: 500;
      height: 550px;
      padding: 30px;
      margin: 0px 30px;

      hr {
        height: 2px;
        border: none;
        background-color: #000;
        margin: 10px 0;
      }
      .value-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        #value-label {
          justify-content: flex-start;
        }

        #value {
          font-weight: bold;
          color: #ff6700;
          font-size: 20pt;
          align-self: flex-end;
        }
      }

      .contacts-group {
        width: 100%;
        margin: 20px 0px;

        .owner-info {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 10px 0px;
          gap: 20px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #ffdac2;
          }
        }

        .owner-contacts {
          margin: 30px 0px;
          width: 100%;
          p {
            font-weight: bold;
          }
          .contact {
            display: flex;
            align-items: center;
            gap: 50px;
            width: 100%;
            padding: 10px 0px;

            .contact-type-group {
              display: flex;
              flex-direction: column;
              justify-content: center;
              color: #ff6700;

              img {
                height: 24px;
                width: 24px;
              }
            }
          }
        }

        #connect-button {
          width: 100%;
        }
      }
    }
  }

  .third-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .add-question-container {
      display: flex;
      flex-direction: column;

      #new-question-input {
      }
    }
  }
`;
