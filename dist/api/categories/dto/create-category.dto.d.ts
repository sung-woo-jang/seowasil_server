import { Category } from './../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "name" | "scientific" | "department">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};
