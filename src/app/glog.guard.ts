import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MyServiceService } from './my-service.service'

@Injectable()
export class GlogGuard implements CanActivate {
	constructor(private service:MyServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.getUserLoggedIn();
  }
}
