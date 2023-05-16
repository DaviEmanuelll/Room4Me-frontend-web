import { Property } from 'types/entities/property';
import { UserWithoutPassword } from './UserWithoutPassword';
import { Contact } from 'types/entities/user';

export interface PropertyWithUserAndContact extends Property {
  ownerWithContact: {
    user: UserWithoutPassword;
    contact: Contact;
  };
}
