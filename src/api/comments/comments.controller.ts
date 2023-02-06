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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  /**
   * @description 문의사항 답글 등록
   */
  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.createComment(createCommentDto);
  }

  /**
   * @description 문의사항 답글 목록 가져오기
   */
  @Get()
  getCommentList() {
    return this.commentsService.getCommentList();
  }

  /**
   * @description 문의사항 답글 가져오기
   */
  @Get('/:id')
  getComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.getComment(id);
  }

  /**
   * @description 문의사항 답글 정보 수정
   */
  @Patch('/:id')
  updateComment(
    @Body() updateCommentDto: UpdateCommentDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.commentsService.updateComment(updateCommentDto, id);
  }

  /**
   * @description 문의사항 답글 삭제
   */
  @Delete('/:id')
  deleteComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.deleteComment(id);
  }
}
