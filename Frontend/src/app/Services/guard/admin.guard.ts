import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

/*No código, você vê que um guarda é simplesmente um serviço que implementa a CanActivateinterface e substitui o canActivate()método. Neste caso, ele sempre retorna, o trueque significa que o acesso será sempre concedido ao usuário quando esta proteção for aplicada a uma rota.*/

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenService){}

  canActivate(    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();     
  
        
       return true
      }
      else
      {
        window.location.href="/login";
        return false;
      }
    }

  
  
}
