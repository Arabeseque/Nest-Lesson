import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { APP_GUARD } from '@nestjs/core';
import { LoginGuard } from './login.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // token == provider
    AppService,
    // provider 实现的 Guard 在IoC容器中， 可以注入别的provider
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
  ],
})
export class AppModule {
  // 配置中间件
  configure(consumer: MiddlewareConsumer) {
    // 路由中间件
    consumer.apply(LogMiddleware).forRoutes('aaa*');
  }
}
