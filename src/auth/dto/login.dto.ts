import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({
    default: 'afe1',
    required: true,
  })
  username: string;

  @ApiProperty({
    default: '123456',
    required: true,
  })
  password: string;
}
