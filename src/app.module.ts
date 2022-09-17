import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './ws/event.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/model/message.model';
import envConfig from '../config/env';

@Module({
  // imports: [PostsModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局
      envFilePath: [envConfig.path],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'blog',
      models: [User, Message],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([User, Message]),
    UserModule,
    AuthModule,
    EventsModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
