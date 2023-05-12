import styled from 'styled-components';

export const Container = styled.div`
  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  .first-section {
    display: flex;
    justify-content: space-around;
    background-color: #ffdac2;
    height: 80vh;

    img {
      width: 510px;
      margin: 85px auto;

      @media (max-width: 1000px) {
        display: none;
      }
    }

    #info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 50px auto;
      width: 400px;
      height: 520px;

      div {
        width: 100%;
        padding: 0px 22px;
        margin: 15px 0px;
      }

      .header {
        margin: 40px 0px 30px 0px;
        text-align: center;
        font-size: 26px;

        p {
          display: inline-block;
          color: #ff6700;
          font-weight: bold;
        }
      }

      .filters-group {
        display: flex;
        padding: 0px;
        justify-content: space-between;
      }
    }
  }

  .second-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
      height: 150vh;
      margin-bottom: 50px;
      padding-top: 40px;
    }

    .banner-section {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 75px;

      @media (max-width: 1000px) {
        flex-direction: column;
        gap: 40px;
      }

      .banner-subsection {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
      }

      .banner-card {
        width: 540px;
        height: 480px;
        background-color: var(--secondary-background);
        border-radius: 12px;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
        z-index: 1;

        @media (max-width: 1000px) {
          width: 800px;
        }
      }

      .banner-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
        transition: transform 0.75s;
        z-index: 1;
      }
      .banner-card:hover {
        box-shadow: 0px 0px 4px 2px rgba(255, 103, 0, 0.2);
      }

      .banner-card:hover .banner-image {
        transform: scale(1.15);
      }
    }
  }

  .third-section {
    display: flex;
    justify-content: space-around;
    height: 90%;

    #info-group {
      display: flex;
      flex-direction: column;
      text-align: justify;
      font-size: 24px;
      justify-content: center;
      align-items: center;
      margin: 0px 190px;

      p {
        display: inline-block;
        color: #ff6700;
        font-weight: bold;
      }

      button {
        width: 450px;
        height: 60px;
        margin: 50px 0px;
        font-size: 22px;
      }
    }

    img {
      width: 510px;
      display: flex;
      margin: 60px auto;

      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
`;
