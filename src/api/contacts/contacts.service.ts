import { ContactsRepository } from './contacts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository,
  ) {}

  createContact(createContactDto: CreateContactDto) {
    throw new Error('Method not implemented.');
  }

  getContactList() {
    throw new Error('Method not implemented.');
  }

  getContact() {
    throw new Error('Method not implemented.');
  }

  updateContact(updateContactDto: UpdateContactDto, id: number) {
    throw new Error('Method not implemented.');
  }

  deleteContact(id: number) {
    throw new Error('Method not implemented.');
  }
}
