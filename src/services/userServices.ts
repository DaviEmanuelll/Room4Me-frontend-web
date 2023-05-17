import { api } from './api';
import { SessionsData, UserWithoutPassword } from 'types/services';

const servicesPrefix = '/user';

export const createUser = async (userData: FormData) => {
  const { data } = await api.post<UserWithoutPassword>(
    servicesPrefix,
    userData,
  );

  return data;
};

export const createUserSession = async (sessionsData: SessionsData) => {
  const { data, headers } = await api.post<UserWithoutPassword>(
    `${servicesPrefix}/sessions`,
    sessionsData,
  );

  return { user: data, token: headers.getAuthorization };
};

export const updateUser = async (userData: FormData) => {
  const { data } = await api.put<UserWithoutPassword>(servicesPrefix, userData);
  return data;
};

export const deleteUser = async (): Promise<void> => {
  await api.delete(servicesPrefix);
};

export const deleteUserAvatar = async (): Promise<void> => {
  await api.delete(`${servicesPrefix}/avatar`);
};
