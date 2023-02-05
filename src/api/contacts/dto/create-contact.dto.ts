import { Contact } from './../entities/contact.entity';
import { PickType } from '@nestjs/swagger';

export class CreateContactDto extends PickType(Contact, [
  'title',
  'description',
  'name',
  'password',
  'category',
] as const) {}
