import { Module } from '@nestjs/common';
import { ContactCategoryService } from './contact-category.service';
import { ContactCategoryController } from './contact-category.controller';
import { ContactCategoryRepository } from './contact-category.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [RepositoryModule.forCustomRepository([ContactCategoryRepository])],
  controllers: [ContactCategoryController],
  providers: [ContactCategoryService],
})
export class ContactCategoryModule {}
