import Navbar from 'components/Navbar';
import Grid, { Container } from './styles';
import FiltersBar from 'components/FiltersBar';
import Card from 'components/Card';

export const SearchPage = () => {
  const cardsData = [
    {
      street: 'Rua B',
      address: '5678',
      bedroomsQuantity: 2,
      bathroomsQuantity: 1,
      arePetsAllowed: false,
      isFavorite: true,
      value: 150000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
    {
      street: 'Rua C',
      address: '91011',
      bedroomsQuantity: 4,
      bathroomsQuantity: 3,
      arePetsAllowed: true,
      isFavorite: true,
      value: 300000,
    },
  ];

  return (
    <>
      <Navbar />
      <FiltersBar />
      <Container>
        <Grid columns={4} gap="1px">
          {cardsData.map((cardProps, index) => (
            <Card key={index} {...cardProps} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
