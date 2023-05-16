import { Entity } from '../Entity';

export interface Address extends Entity {
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  propertyNumber: string;
  condominiumNumber: string | null;
  block: string | null;
  complement: string | null;
  zipCode: number;
}
