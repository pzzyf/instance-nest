import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    default: 'afe1',
    description: '创建用户姓名',
  })
  username: string;

  @IsNotEmpty()
  @ApiProperty({
    default: '123456',
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty({
    default: 'https://api.multiavatar.com/Binx%$77231.png',
  })
  avatar: string;
}
