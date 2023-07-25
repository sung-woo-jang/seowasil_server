import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoticesService } from './notices.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Controller('notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}
  // 공지사항 등록
  // 공지사항 목록 가져오기
  // 공지사항 가져오기
  // 공지사항 수정
  // 공지사항 삭제
}
