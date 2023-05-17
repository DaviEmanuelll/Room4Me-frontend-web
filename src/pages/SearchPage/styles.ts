import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

interface GridProps {
  columns: number;
  gap: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  margin-top: 95px;
  margin-left: 20%;
  padding: 0px 20px;
  justify-items: center;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
  row-gap: 30px;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 35%;
  }
`;

export default Grid;
