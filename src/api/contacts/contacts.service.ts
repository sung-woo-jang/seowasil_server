import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './contacts.repository';
import { ContactCategoryRepository } from '@app/contact-category/contact-category.repository';

@Injectable()
export class ContactsService {
  constructor(
    private contactsRepository: ContactsRepository,
    private contactCategoryRepository: ContactCategoryRepository,
  ) {}
  async createContacts(createContactsDto: CreateContactDto) {
    const { contactCategoryId, ...contactsDto } = createContactsDto;

    const contactCategory =
      await this.contactCategoryRepository.findOneContactCategory(
        contactCategoryId,
      );

    return await this.contactsRepository.createContacts(
      contactCategory,
      contactsDto,
    );
  }

  async findAllContacts() {
    return this.contactsRepository.findAllContacts();
  }

  async findOneContacts(id: number) {
    return this.contactsRepository.findOneContacts(id);
  }

  async updateContacts(id: number, updateContactsDto: UpdateContactDto) {
    return this.contactsRepository.updateContacts(id, updateContactsDto);
  }

  async removeContacts(id: number) {
    return this.contactsRepository.removeContacts(id);
  }
}
