import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

const WHITELIST = (process.env.WHITELIST || '').split(',').concat(['localhost', '127.0.0.1'])

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return WHITELIST.includes(request.hostname)
  }
}