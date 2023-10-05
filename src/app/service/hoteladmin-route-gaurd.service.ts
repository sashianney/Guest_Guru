import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HoteladminHardCodedAuthenticationService } from './hoteladmin-hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HoteladminRouteGaurdService implements CanActivate{

  constructor(private hoteladminHardCodedAuthenticationService:HoteladminHardCodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hoteladminHardCodedAuthenticationService.isHoteladminLoggedIn()){
      return true;
    }
    return false;
  }
}
