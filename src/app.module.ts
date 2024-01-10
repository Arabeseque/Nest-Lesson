import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';

@Module({
  imports: [PersonModule, OtherModule],
  controllers: [AppController],
  providers: [
    // token == provider
    AppService,

    // 直接指定值让 IoC 容器注入
    {
      provide: 'person',
      useValue: {
        name: 'John',
        age: 28,
      },
    },

    {
      provide: 'person2',
      useFactory: () => {
        return {
          name: 'John',
          age: 28,
        };
      },
    },

    // 通过参数注入别的 provider
    {
      provide: 'person3',
      useFactory: (person: { name: string }, appService: AppService) => {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },

    // 支持异步
    {
      provide: 'person4',
      useFactory: async (person: { name: string }, appService: AppService) => {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
  ],
})
export class AppModule { }
