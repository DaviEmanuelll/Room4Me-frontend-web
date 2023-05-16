import styled from 'styled-components';

interface LoginAndRegisterWrapperProps {
  imageUrl: string;
}

export const LoginAndRegisterWrapper = styled.div<LoginAndRegisterWrapperProps>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;
