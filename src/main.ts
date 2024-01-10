import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 全局 Middleware
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before', req.url);
    next();
    console.log('after');
  });

  // 全局 Guard
  // app.useGlobalGuards(new LoginGuard());
  await app.listen(3000);
}
bootstrap();
