import { IntersectionType, PickType } from '@nestjs/swagger';
import { Contact } from '../entities/contact.entity';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class ContactDto extends PickType(Contact, [
  'title',
  'description',
  'name',
  'password',
] as const) {}

export class CreateContactDto extends IntersectionType(ContactDto) {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  contactCategoryId: number;
}
