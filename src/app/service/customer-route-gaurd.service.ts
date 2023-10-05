import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerHardCodedAuthenticationService } from './customer-hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerRouteGaurdService implements CanActivate{

  constructor(private customerHardCodedAuthenticationService :CustomerHardCodedAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.customerHardCodedAuthenticationService.isCustomerLoggedIn()){
      return true;
    }
    return false;
  }
}
