import styled from 'styled-components';

export const InputLabel = styled.label`
  font-size: 16px;
  position: absolute;
  margin-left: 20px;
  transform: translateY(-50%);
  background-color: ${props => props.color || '#fffcf9'};
  border-left: solid 4px ${props => props.color || '#fffcf9'};
  border-right: solid 4px ${props => props.color || '#fffcf9'};
`;
