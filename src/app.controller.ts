import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';

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

  @Get('aaa')
  @UseGuards(LoginGuard)
  getAaa(): string {
    console.log('getAaa');
    return 'aaa';
  }

  @Get('bbb')
  @UseInterceptors(TimeInterceptor)
  getBbb(): string {
    console.log('getBbb');
    return 'bbb';
  }

  @Get('ccc')
  ccc(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }
}
