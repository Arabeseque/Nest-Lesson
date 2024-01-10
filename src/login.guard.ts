import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

// nest g guard login --no-spec --flat
@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(AppService)
  private readonly appService: AppService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('login check', this.appService.getHello());
    return false;
  }
}
