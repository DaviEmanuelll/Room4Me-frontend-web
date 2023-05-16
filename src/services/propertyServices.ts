import { api } from './api';
import { Property } from 'types/entities/property';
import {
  PropertyWithUserAndContact,
  PropertyWithoutEntity,
} from 'types/services';

const servicesPrefix = '/property';

export const findAllProperties = async () => {
  const { data } = await api.get<Property[]>(servicesPrefix);
  return data;
};

export const findAllPropertiesByUser = async (userId: string) => {
  const { data } = await api.get<Property[]>(
    `${servicesPrefix}/findAllByUserId/${userId}`,
  );
  return data;
};

export const findPropertyById = async (propertyId: string) => {
  const { data } = await api.get<PropertyWithUserAndContact>(
    `${servicesPrefix}/${propertyId}`,
  );
  return data;
};

export const createProperty = async (propertyData: PropertyWithoutEntity) => {
  const { data } = await api.post<Property>(servicesPrefix, propertyData);
  return data;
};

export const updateProperty = async (
  propertyId: string,
  propertyData: PropertyWithoutEntity,
) => {
  const { data } = await api.put<Property>(
    `${servicesPrefix}/${propertyId}`,
    propertyData,
  );

  return data;
};

export const deleteProperty = async (propertyId: string) => {
  await api.delete(`${servicesPrefix}/${propertyId}`);
};
