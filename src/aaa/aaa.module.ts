import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log(`Module The module has been initialized.`);
  }

  onApplicationBootstrap() {
    console.log(`Module The application has been initialized. Bootstrap!`);
  }
}
