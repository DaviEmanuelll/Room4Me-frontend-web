import { User } from 'types/entities/user';

export type UserWithoutPassword = Omit<User, 'password'>;
