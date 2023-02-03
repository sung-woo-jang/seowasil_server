import { Contact } from './entities/contact.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Contact)
export class ContactsRepository extends Repository<Contact> {}
