import Navbar from 'components/Navbar';
import Grid, { Container } from './styles';
import FiltersBar from 'components/FiltersBar';
import Card from 'components/Card';
import { useState } from 'react';

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

  const [region, setRegion] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');
  const [bedroomType, setBedroomType] = useState<string>('');
  const [maxValue, setMaxValue] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [shareRoom, setShareRoom] = useState<string>('');
  const [shareWith, setShareWith] = useState<string>('');
  const [allowPets, setAllowPets] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <FiltersBar
        region={region}
        setRegion={setRegion}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        bedroomType={bedroomType}
        setBedroomType={setBedroomType}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        shareRoom={shareRoom}
        setShareRoom={setShareRoom}
        shareWith={shareWith}
        setShareWith={setShareWith}
        allowPets={allowPets}
        setAllowPets={setAllowPets}
      />
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
