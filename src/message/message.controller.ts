import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './dto/create-message.dto';
import { findMessageListDTO } from './dto/find-messageList.dto';
import { MessageService } from './message.service';

@ApiTags('ws')
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send')
  async create(@Body() CreateMessageDto: CreateMessageDto) {
    return await this.messageService.create(CreateMessageDto);
  }

  @Post('list')
  async findAll(@Body() findMessageListDTO: findMessageListDTO) {
    return await this.messageService.findMessageList(findMessageListDTO);
  }
}
