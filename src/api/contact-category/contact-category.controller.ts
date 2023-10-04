import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactCategoryService } from './contact-category.service';
import { CreateContactCategoryDto } from './dto/create-contact-category.dto';
import { UpdateContactCategoryDto } from './dto/update-contact-category.dto';
import { Public } from '@common/decorators/skip-auth.decorator';

@Controller('contact-category')
export class ContactCategoryController {
  constructor(
    private readonly contactCategoryService: ContactCategoryService,
  ) {}

  @Post()
  createContactCategory(
    @Body() createContactCategoryDto: CreateContactCategoryDto,
  ) {
    return this.contactCategoryService.createContactCategory(
      createContactCategoryDto,
    );
  }

  @Public()
  @Get()
  findAllContactCategory() {
    return this.contactCategoryService.findAllContactCategory();
  }

  @Public()
  @Get(':id')
  findOneContactCategory(@Param('id', ParseIntPipe) id: number) {
    return this.contactCategoryService.findOneContactCategory(id);
  }

  @Patch(':id')
  updateContactCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactCategoryDto: UpdateContactCategoryDto,
  ) {
    return this.contactCategoryService.updateContactCategory(
      id,
      updateContactCategoryDto,
    );
  }

  @Delete(':id')
  removeContactCategory(@Param('id', ParseIntPipe) id: number) {
    return this.contactCategoryService.removeContactCategory(id);
  }
}
