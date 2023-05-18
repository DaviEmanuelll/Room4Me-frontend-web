import { Navbar } from 'components/Navbar';
import Grid, { Container } from './styles';
import { FiltersBar } from 'components/FiltersBar';
import Card from 'components/Card';
import { useCallback, useEffect, useState } from 'react';
import { Property } from 'types/entities/property';
import { findAllProperties } from 'services/propertyServices';
import {
  createFavoriteProperty,
  deleteFavoriteProperty,
  findAllFavoritePropertiesByUser,
} from 'services/favoritePropertyServices';
import { useAuth } from 'hooks/auth';

export const SearchPage = () => {
  const { userData } = useAuth();

  const [properties, setProperties] = useState<Property[]>([]);
  const [favoritePropertiesIds, setFavoritePropertiesIds] = useState<string[]>(
    [],
  );

  useEffect(() => {
    findAllProperties().then(setProperties);

    if (userData === null) return;
    findAllFavoritePropertiesByUser(userData.user.id).then(favoriteProperties =>
      setFavoritePropertiesIds(
        favoriteProperties.map(({ propertyId }) => propertyId),
      ),
    );
  }, [userData]);

  const propertyIsFavorite = useCallback(
    ({ id: propertyId }: Property) => {
      return favoritePropertiesIds.findIndex(id => id === propertyId) !== -1;
    },
    [favoritePropertiesIds],
  );

  const toggleFavoriteProperty = useCallback(
    async (propertyId: string, favorite: boolean) => {
      if (favorite) {
        const { propertyId: newId } = await createFavoriteProperty(propertyId);
        setFavoritePropertiesIds(previousIds => [...previousIds, newId]);
        return;
      }

      await deleteFavoriteProperty(propertyId);
      setFavoritePropertiesIds(previousIds =>
        previousIds.filter(id => id !== propertyId),
      );
    },
    [],
  );

  const [region, setRegion] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [bedroomType, setBedroomType] = useState('');
  const [maxValue, setMaxValue] = useState(0);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [shareRoom, setShareRoom] = useState('');
  const [shareWith, setShareWith] = useState('');
  const [allowPets, setAllowPets] = useState(false);

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
          {properties.map(property => (
            <Card
              key={property.id}
              property={property}
              isFavorite={propertyIsFavorite(property)}
              toggleFavoriteProperty={toggleFavoriteProperty}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
