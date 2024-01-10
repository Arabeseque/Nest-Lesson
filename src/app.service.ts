import { Inject, Injectable } from '@nestjs/common';
import { BbbService } from './bbb/bbb.service';

@Injectable()
export class AppService {
  @Inject(BbbService)
  private readonly bbbModule: BbbService;

  getHello(): string {
    return 'Hello World!' + this.bbbModule.findAll();
  }
}
