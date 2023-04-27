import styled from 'styled-components';

export const TextField = styled.input`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.75px;
  line-height: 14px;
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  background: transparent;
  border: solid 1.5px #4c4652;
  color: rgb(33, 33, 33);
  padding: 0px 10px;
  outline: none;

  &:focus {
    outline: none;
    border: 1.5px solid #ff6700;
  }

  &:focus + label {
    color: #ff6700;
  }
`;
