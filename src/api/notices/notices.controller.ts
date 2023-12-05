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
import { NoticesService } from './notices.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { Public } from '@common/decorators/skip-auth.decorator';

@Controller('notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}
  // 공지사항 등록
  @Post()
  createNotices(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticesService.createNotices(createNoticeDto);
  }
  // 공지사항 목록 가져오기
  @Public()
  @Get()
  getNotices() {
    return this.noticesService.getNotices();
  }
  // 공지사항 상세 가져오기
  @Public()
  @Get('/:id')
  getNoticeDetail(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.getNoticeDetail(id);
  }
  // 공지사항 수정
  @Patch('/:id')
  patchNotice(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.patchNotice(id);
  }
  // 공지사항 삭제
  @Delete('/:id')
  deleteNotice(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.deleteNotice(id);
  }
}
