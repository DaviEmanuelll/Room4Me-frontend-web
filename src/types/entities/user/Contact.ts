import { Entity } from '../Entity';

export interface Contact extends Entity {
  email: string;
  callNumber: string;
  whatsappNumber: string;
  instagram: string | null;
}
