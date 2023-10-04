import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  // 문의사항 답글 등록
  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.createComment(createCommentDto);
  }
  // 문의사항 답글 목록 가져오기
  // 문의사항 답글 가져오기
  // 문의사항 답글 정보 수정
  // 문의사항 답글 삭제
  @Delete('/:id')
  softDeleteComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.softDeleteComment(id);
  }
}
