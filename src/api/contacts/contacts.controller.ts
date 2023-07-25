import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
  // 문의사항 등록
  // 문의사항 목록 가져오기
  // 문의사항 가져오기
  // 문의사항 정보 수정
  // 문의사항 삭제
}
