import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate( 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        return this.authService.authenticate()
            .then( (authenticated: boolean) => {

                if(authenticated) {
                    return true;
                }else {
                    // console.log("Can activate transfer to dashboard")
                    this.router.navigate(['/']);
                }
            });
    }

}