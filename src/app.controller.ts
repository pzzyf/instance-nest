import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { LoginDTO } from './auth/dto/login.dto';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @ApiTags('jwt注册')
  @Post('auth/register')
  async AuthRegister(@Body() user: CreateUserDto) {
    return await this.appService.register(user);
  }

  @ApiTags('jwt登录')
  @Post('auth/login')
  async AuthLogin(@Body() loginParams: LoginDTO) {
    return await this.appService.login(loginParams);
  }
}
