import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from './auth/auth.service';
import { User } from './user/model/user.model';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private authService: AuthService,
  ) {}

  async register(user) {
    const hash = await bcrypt.hash(user.password, 10);
    const isNotExist = await this.userModel.findOne({
      where: {
        username: user.username,
      },
    });
    if (!isNotExist) {
      const res = await this.userModel.build({
        username: user.username,
        password: hash,
        avatar: user.avatar,
      });
      await res.save();
      return {
        code: '200',
        msg: '用户注册成功',
      };
    } else {
      return {
        code: '1001',
        msg: '该用户已存在',
      };
    }
  }

  async login(loginParmas) {
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );

    if (authResult) {
      return this.authService.login(authResult);
    } else {
      return {
        code: '1002',
        msg: `请检查用户名或密码是否正确,${loginParmas}`,
      };
    }
  }
}
