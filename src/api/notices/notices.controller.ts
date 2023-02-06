import { UpdateNoticeDto } from './dto/update-notice.dto';
import { CreateNoticeDto } from './dto/create-notice.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NoticesService } from './notices.service';

@Controller('notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}

  /**
   * @description 공지사항 등록
   */
  @Post()
  createNotice(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticesService.createNotice(createNoticeDto);
  }

  /**
   * @description 공지사항 목록 가져오기
   */
  @Get()
  getNoticeList() {
    return this.noticesService.getNoticeList();
  }

  /**
   * @description 공지사항 가져오기
   */
  @Get('/:id')
  getNotice(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.getNotice(id);
  }

  /**
   * @description 공지사항 수정
   */
  @Patch('/:id')
  updateNotice(
    @Body() updateNoticeDto: UpdateNoticeDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.noticesService.updateNotice(updateNoticeDto, id);
  }

  /**
   * @description 공지사항 삭제
   */
  @Delete('/:id')
  deleteNotice(@Param('id', ParseIntPipe) id: number) {
    return this.noticesService.deleteNotice(id);
  }
}
