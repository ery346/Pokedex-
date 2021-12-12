import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComenzarGuard implements CanActivate, CanLoad {

  get validacion(){
    return this.servicio.validacion
  }

  constructor(private servicio : AuthService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (this.validacion ) {
        
        return true;
      }else {
        return false;
      }
   
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.validacion) {
     
        return true;
      }else {
        return false;
      }
  
  }
}
