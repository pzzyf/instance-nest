import { ApiProperty } from '@nestjs/swagger';

export class findMessageListDTO {
  @ApiProperty({
    default: 'afe1',
    description: '消息发送者',
    example: 'afe1',
    required: true,
  })
  username: string;
  @ApiProperty({
    default: 'ws',
    description: '当前聊天对象',
    example: 'ws',
    required: true,
  })
  currentChater: string;
}
