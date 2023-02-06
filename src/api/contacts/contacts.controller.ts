import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  /**
   * @description 문의사항 등록
   */
  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  /**
   * @description 문의사항 목록 가져오기
   */
  @Get()
  getContactList() {
    return this.contactsService.getContactList();
  }

  /**
   * @description 문의사항 가져오기
   */
  @Get('/:id')
  getContact(@Param('id', ParseIntPipe) id: number, @Body() { password }) {
    return this.contactsService.getContact(id, password);
  }

  /**
   * @description 문의사항 정보 수정
   */
  @Patch('/:id')
  updateContact(
    @Body() updateContactDto: UpdateContactDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.contactsService.updateContact(updateContactDto, id);
  }

  /**
   * @description 문의사항 삭제
   */
  @Delete('/:id')
  deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.deleteContact(id);
  }
}
