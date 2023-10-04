import { Injectable } from '@nestjs/common';
import { CreateContactCategoryDto } from './dto/create-contact-category.dto';
import { UpdateContactCategoryDto } from './dto/update-contact-category.dto';
import { ContactCategoryRepository } from './contact-category.repository';

@Injectable()
export class ContactCategoryService {
  constructor(private contactCategoryRepository: ContactCategoryRepository) {}

  createContactCategory(createContactCategoryDto: CreateContactCategoryDto) {
    return this.contactCategoryRepository.createContactCategory(
      createContactCategoryDto,
    );
  }

  findAllContactCategory() {
    return this.contactCategoryRepository.findAllContactCategory();
  }

  findOneContactCategory(id: number) {
    return this.contactCategoryRepository.findOneContactCategory(id);
  }

  updateContactCategory(
    id: number,
    updateContactCategoryDto: UpdateContactCategoryDto,
  ) {
    return this.contactCategoryRepository.updateContactCategory(
      id,
      updateContactCategoryDto,
    );
  }

  removeContactCategory(id: number) {
    return this.contactCategoryRepository.removeContactCategory(id);
  }
}
