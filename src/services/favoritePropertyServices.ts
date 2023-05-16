import { FavoriteProperty } from 'types/entities/property';
import { api } from './api';

const servicesPrefix = '/favoriteProperty';

export const findAllFavoritePropertiesByUser = async (userId: string) => {
  const { data } = await api.get<FavoriteProperty[]>(
    `${servicesPrefix}/findAllByUserId/${userId}`,
  );

  return data;
};

export const createFavoriteProperty = async (propertyId: string) => {
  const { data } = await api.post<FavoriteProperty>(
    `${servicesPrefix}/${propertyId}`,
  );

  return data;
};

export const deleteFavoriteProperty = async (propertyId: string) => {
  await api.delete(`${servicesPrefix}/${propertyId}`);
};
