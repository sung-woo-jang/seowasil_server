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
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Public } from '@common/decorators/skip-auth.decorator';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
  // 문의사항 등록
  @Post()
  createContacts(@Body() createContactsDto: CreateContactDto) {
    return this.contactsService.createContacts(createContactsDto);
  }

  // 문의사항 목록 가져오기
  @Public()
  @Get()
  findAllContacts() {
    return this.contactsService.findAllContacts();
  }

  // 문의사항 가져오기
  @Public()
  @Get(':id')
  findOneContacts(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.findOneContacts(id);
  }

  // 문의사항 정보 수정
  @Patch(':id')
  updateContacts(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactsDto: UpdateContactDto,
  ) {
    return this.contactsService.updateContacts(id, updateContactsDto);
  }

  // 문의사항 삭제
  @Delete(':id')
  removeContacts(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.removeContacts(id);
  }
}
