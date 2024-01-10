import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';

@Injectable()
export class AaaService implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log(`Service The module has been initialized.`);
  }

  onApplicationBootstrap() {
    console.log(`Service The application has been initialized.`);
  }
  create(createAaaDto: CreateAaaDto) {
    return 'This action adds a new aaa';
  }

  findAll() {
    return `This action returns all aaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aaa`;
  }

  update(id: number, updateAaaDto: UpdateAaaDto) {
    return `This action updates a #${id} aaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aaa`;
  }
}
