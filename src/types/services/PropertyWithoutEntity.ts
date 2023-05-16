import { Entity } from 'types/entities';
import { Property } from 'types/entities/property';

export type PropertyWithoutEntity = Omit<Property, keyof Entity>;
