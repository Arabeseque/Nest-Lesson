import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 将 public 目录映射到 /static
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(3000);
}
bootstrap();