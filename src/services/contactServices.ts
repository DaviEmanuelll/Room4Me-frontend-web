import { Contact } from 'types/entities/user';
import { api } from './api';
import { ContactWithoutEntity } from 'types/services';

const servicesPrefix = '/contact';

export const findContactByUser = async (userId: string) => {
  const { data } = await api.get(`${servicesPrefix}/findByUserId/${userId}`);
  return data;
};

export const updateUserContact = async (contactData: ContactWithoutEntity) => {
  const { data } = await api.put<Contact>(servicesPrefix, contactData);
  return data;
};
