import {
  BeforeApplicationShutdown,
  Injectable,
  OnModuleDestroy,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class BbbService
  implements
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
  BeforeApplicationShutdown {
  onModuleDestroy() {
    console.log(`Service The module has been destroyed.`);
  }
  beforeApplicationShutdown(signal?: string) {
    console.log(
      `Service The application is about to shutdown with signal ${signal}`,
    );
  }
  onApplicationShutdown(signal?: string) {
    console.log(`Service The application shutdown with signal ${signal}`);
  }

  constructor(private aaaService: AaaService) { }

  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
