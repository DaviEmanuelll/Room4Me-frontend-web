import Card from 'components/Card';
import { Container } from './styles';

const cardExample = {
  street: 'Maria de Medeiros Miranda',
  address: 'Belo Horizonte, Mossoró',
  bedroomsQuantity: 2,
  bathroomsQuantity: 1,
  arePetsAllowed: false,
  isFavorite: true,
  value: 30,
};

export const HomePage = () => {
  return (
    <Container>
      <Card {...cardExample}></Card>
    </Container>
  );
};
