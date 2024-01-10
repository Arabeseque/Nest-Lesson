import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Inject('person')
  private readonly person: any;

  @Inject('person2')
  private readonly person2: any;

  @Get()
  getHello(): string {
    console.log(this.person);
    return this.appService.getHello();
  }
}
