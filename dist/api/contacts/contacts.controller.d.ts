import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    createContact(createContactDto: CreateContactDto): Promise<{
        name: string;
        password: string;
        description: string;
        title: string;
        category: string;
    } & import("./entities/contact.entity").Contact>;
    getContactList(): Promise<import("./entities/contact.entity").Contact[]>;
    getContact(id: number, { password }: {
        password: any;
    }): Promise<import("./entities/contact.entity").Contact>;
    updateContact(updateContactDto: UpdateContactDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteContact(id: number): Promise<import("typeorm").UpdateResult>;
}
