import { Entity } from 'types/entities';

export interface SessionsData extends Entity {
  email: string;
  password: string;
}
