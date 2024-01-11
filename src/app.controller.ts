import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
//  Interceptor
// @UseInterceptors(TimeInterceptor)
// 对 Controller 生效 Pipe
// @UsePipes(ValidatePipe)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('getHello');
    return this.appService.getHello();
  }
}
