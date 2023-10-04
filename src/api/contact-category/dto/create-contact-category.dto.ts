import { PickType } from '@nestjs/swagger';
import { ContactCategory } from '../entities/contact-category.entity';

export class CreateContactCategoryDto extends PickType(ContactCategory, [
  'title',
] as const) {}
