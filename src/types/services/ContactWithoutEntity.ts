import { Entity } from 'types/entities';
import { Contact } from 'types/entities/user';

export type ContactWithoutEntity = Omit<Contact, keyof Entity>;
