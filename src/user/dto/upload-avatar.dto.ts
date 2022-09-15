import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class uploadAvatarDto {
  @IsNotEmpty()
  @ApiProperty({
    default: 'afe1',
    description: '创建用户姓名',
  })
  username: string;

  @IsNotEmpty()
  @ApiProperty({
    default: '2279948211',
  })
  avatar: string;
}
