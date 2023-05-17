import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: #ff6700;
  color: #fffcf9;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 40px;
  outline: none;
  transition: 0.3s;

  &:hover {
    background-color: #bf4d00;
    cursor: pointer;
  }
`;

export const OutlinedButton = styled.button`
  background-color: transparent;
  color: #ff6700;
  border: 2px solid #ff6700;
  border-radius: 12px;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 40px;
  outline: none;

  &:hover {
    color: #ffffff;
    background-color: #ff6700;
    cursor: pointer;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #ffffff;
  color: #ff6700;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 40px;
  outline: none;

  &:hover {
    color: #ffffff;
    background-color: #ff6700;
    cursor: pointer;
  }
`;
