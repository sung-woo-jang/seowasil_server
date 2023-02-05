import { Category } from './../entities/category.entity';
import { PickType } from '@nestjs/swagger';

export class CreateCategoryDto extends PickType(Category, [
  'name',
  'scientific',
  'department',
] as const) {}
