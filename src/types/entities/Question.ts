import { Entity } from './Entity';
import { User } from './user';

export interface Question extends Entity {
  questioner: Pick<User, 'id' | 'name' | 'avatarLink'>;
  content: string;
  answer: string | null;
}
