import styled from 'styled-components';

export const Container = styled.div`
  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }

  width: 100vw;
  height: 100vh;
  background-color: #FFFCF9;
  display: flex;
  flex-direction: column;

  #header {
    width: 100%;
    height: 40%;
    margin-top: 64px;
    background-color: #F4F4F4;

    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    @media (max-width: 1000px) {
      flex-direction: column;

    }
    
    #heading {
        width: 70%;
        height: 30%;
        padding-left: 30%;
        background-color: #FFDAC2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 4px;
        border-radius: 0px 0px 64px 0px;
    }

    #image-profile {
        width: 200px;
        height: 200px;
        position: absolute;
        margin-top: 40px;
        margin-left: 10%;
        border-radius: 50%;
    }

    #user-data {
        padding-left: 30%;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    #user-name {
        font-width: 500;
        font-size: 24px;
        color: #FF6700;
    }

    #user-gender {
        font-size: 14px;
        color: #FF6700;
    }

    .title {
        font-size: 16px;
        font-weight: 700;
        color: #4C4652;
    }

    #user-contact {
        margin-top: 18px;
        margin-botton: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .line {
        display: flex;
        justify-content: left;
        gap: 64px;
    }
    .in-line {
        display: flex;
        justify-content: left;
        align-items: end;
        gap: 16px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        width: 64px;
    }
    .contact-name {
        font-size: 12px;
        font-weight: 400;
        color: #FF6700;
    }
    .contact-image {
        width: 24px;
        height: 24px;
    }
}

#annouenced-rooms, #favorites-rooms {
    font-size: 24px;
    font-weight: 700;
    margin-left: 10%;
    font-color: #FF6700;
}

`;
