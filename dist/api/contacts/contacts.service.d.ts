import { ContactsRepository } from './contacts.repository';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';
export declare class ContactsService {
    private contactsRepository;
    constructor(contactsRepository: ContactsRepository);
    createContact(createContactDto: CreateContactDto): Promise<{
        name: string;
        password: string;
        description: string;
        title: string;
        category: string;
    } & Contact>;
    getContactList(): Promise<Contact[]>;
    getContact(id: number, password: string): Promise<Contact>;
    updateContact(updateContactDto: UpdateContactDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteContact(id: number): Promise<import("typeorm").UpdateResult>;
}
