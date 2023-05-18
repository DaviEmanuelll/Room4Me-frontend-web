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
  const [searchedPropertiesIndexes, setSearchedPropertiesIndexes] = useState<
    number[]
  >([]);
  const [favoritePropertiesIds, setFavoritePropertiesIds] = useState<string[]>(
    [],
  );

  useEffect(() => {
    findAllProperties().then(properties => {
      setProperties(properties);
      setSearchedPropertiesIndexes([...Array(properties.length).keys()]);
    });
  }, []);

  useEffect(() => {
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
      if (userData === null) {
        alert('É preciso estar logado para favoritar uma propriedade!');
        return;
      }

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
    [userData],
  );

  return (
    <>
      <Navbar />
      <FiltersBar
        properties={properties}
        setSearchedPropertiesIndexes={indexes =>
          setSearchedPropertiesIndexes(indexes)
        }
      />
      <Container>
        <Grid columns={4} gap="1px">
          {searchedPropertiesIndexes.map(index => (
            <Card
              key={properties[index].id}
              property={properties[index]}
              isFavorite={propertyIsFavorite(properties[index])}
              toggleFavoriteProperty={toggleFavoriteProperty}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
