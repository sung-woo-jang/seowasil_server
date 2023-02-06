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

  async createContact(createContactDto: CreateContactDto) {
    const result = await this.contactsRepository.save({
      ...createContactDto,
    });
    return result;
  }

  async getContactList() {
    const result = await this.contactsRepository.find();
    return result;
  }

  async getContact() {
    throw new Error('Method not implemented.');
  }

  async updateContact(updateContactDto: UpdateContactDto, id: number) {
    throw new Error('Method not implemented.');
  }

  async deleteContact(id: number) {
    throw new Error('Method not implemented.');
  }
}
