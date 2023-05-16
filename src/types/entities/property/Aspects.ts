import { Entity } from '../Entity';

export interface Aspects extends Entity {
  shareWithSameGender: boolean;
  acceptAnimals: boolean;
  hasGarage: boolean;
  furnished: boolean;
  bathroomsQuantity: number;
  bedroomsQuantity: number;
}
