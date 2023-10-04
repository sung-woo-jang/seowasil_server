import { Repository } from 'typeorm';
import { ContactCategory } from './entities/contact-category.entity';
import { UpdateContactCategoryDto } from './dto/update-contact-category.dto';
import { CreateContactCategoryDto } from './dto/create-contact-category.dto';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(ContactCategory)
export class ContactCategoryRepository extends Repository<ContactCategory> {
  async createContactCategory(
    createContactCategoryDto: CreateContactCategoryDto,
  ) {
    return await this.save(createContactCategoryDto);
  }

  async findAllContactCategory() {
    return await this.find();
  }

  async findOneContactCategory(id: number) {
    return await this.findOne({
      relations: {
        contact: {
          comment: true,
        },
      },
      where: { id },
    });
  }

  async updateContactCategory(
    id: number,
    updateContactCategoryDto: UpdateContactCategoryDto,
  ) {
    return { id, updateContactCategoryDto };
  }

  async removeContactCategory(id: number) {
    return await this.createQueryBuilder('contactCategory')
      .softDelete()
      .where({ id })
      .execute();
  }
}
