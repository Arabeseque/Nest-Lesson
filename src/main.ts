import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 全局 Guard
  // app.useGlobalGuards(new LoginGuard());
  await app.listen(3000);
}
bootstrap();
