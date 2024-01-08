import { Injectable, Inject } from '@nestjs/common';
// import { OtherService } from './other/other.service';
// import { PersonService } from './person/person.service';

@Injectable()
export class AppService {
  // @Inject(OtherService)
  // private readonly otherService: OtherService;

  getHello(): string {
    return 'Hello World!';
  }
}
