import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationShutdown,
  OnModuleDestroy,
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { AaaModule } from 'src/aaa/aaa.module';

@Module({
  imports: [AaaModule],
  controllers: [BbbController],
  providers: [BbbService],
  exports: [BbbService],
})
export class BbbModule
  implements OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  onModuleDestroy() {
    console.log(`Module The module has been destroyed.`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(
      `Module The application is about to shutdown with signal ${signal}`,
    );
  }

  onApplicationShutdown(signal?: string) {
    console.log(`Module The application shutdown with signal ${signal}`);
  }
}
