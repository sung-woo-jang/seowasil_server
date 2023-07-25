import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  // 문의사항 답글 등록
  // 문의사항 답글 목록 가져오기
  // 문의사항 답글 가져오기
  // 문의사항 답글 정보 수정
  // 문의사항 답글 삭제
}
