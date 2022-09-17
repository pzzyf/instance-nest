import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    default: 'hello',
    description: '消息内容',
    example: 'hello',
    required: true,
  })
  content: string;
  @ApiProperty({
    default: 'afe1',
    description: '发生着',
    example: 'afe1',
    required: true,
  })
  sender: string;

  @ApiProperty({
    default: 'ws',
    description: '接收者',
    example: 'ws',
    required: true,
  })
  receiver: string;
}
