import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactCategory } from '@app/contact-category/entities/contact-category.entity';
import { ContactDto } from './dto/create-contact.dto';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Contact)
export class ContactsRepository extends Repository<Contact> {
  async createContacts(
    contactCategory: ContactCategory,
    contactsDto: ContactDto,
  ) {
    return await this.save({ ...contactsDto, contactCategory });
  }

  async findAllContacts() {
    return await this.createQueryBuilder('contact')
      .leftJoinAndSelect('contact.contactCategory', 'contactCategory')
      .leftJoinAndSelect('contact.comment', 'comment')
      .select([
        'contact.id',
        'contact.title',
        'contact.description',
        'contact.name',
        'comment',
        'contactCategory.id',
        'contactCategory.title',
      ])
      .getMany();
  }
  async findOneContacts(id: number) {
    return await this.findOne({
      relations: { comment: true },
      where: { id },
    });
  }
  async updateContacts(id: number, updateContactsDto: UpdateContactDto) {
    throw new Error(`Method not implemented. ${{ id, updateContactsDto }}`);
  }
  async removeContacts(id: number) {
    return await this.createQueryBuilder('contacts')
      .softDelete()
      .where('id = :id', { id })
      .execute();
  }
}
