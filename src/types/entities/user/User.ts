import { Gender } from 'types/Gender';
import { Entity } from '../Entity';

export interface User extends Entity {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  avatarLink: string | null;
}
