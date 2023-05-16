import { Entity } from '../Entity';
import { Address } from './Address';
import { Aspects } from './Aspects';
import { Image } from './Image';

export interface Property extends Entity {
  title: string;
  rentPeriod: string;
  description: string;
  initialRentDate: Date;
  rent: number;
  availableToShare: boolean;
  address: Address;
  aspects: Aspects;
  images: Image[];
}
