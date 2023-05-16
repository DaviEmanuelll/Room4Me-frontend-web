import { Image } from 'types/entities/property';
import { api } from './api';

const servicesPrefix = '/image';

export const createImageToProperty = async (propertyId: string) => {
  const { data } = await api.post<Image>(
    `${servicesPrefix}/createToProperty/${propertyId}`,
  );

  return data;
};

export const deleteImage = async (imageId: string) => {
  await api.delete(`${servicesPrefix}/${imageId}`);
};

export const deleteMultipleImages = async (imagesIds: string[]) => {
  await api.delete(`${servicesPrefix}/deleteMultiple`, {
    data: {
      imagesIds,
    },
  });
};
