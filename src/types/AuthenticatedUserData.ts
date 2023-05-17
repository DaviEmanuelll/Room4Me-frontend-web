import { UserWithoutPassword } from './services';

export interface AuthenticatedUserData {
  user: UserWithoutPassword;
  token: string;
}
