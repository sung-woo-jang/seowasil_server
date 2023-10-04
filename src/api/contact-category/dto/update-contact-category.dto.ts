import { PartialType } from '@nestjs/swagger';
import { CreateContactCategoryDto } from './create-contact-category.dto';

export class UpdateContactCategoryDto extends PartialType(
  CreateContactCategoryDto,
) {}
