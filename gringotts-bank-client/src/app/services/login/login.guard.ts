import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
    }


    canActivate() {
        if (this.loginService.isLoggedIn()) {
            return true;
        } else {
            this.loginService.logout();
            this.router.navigate(['login']);
            return false;
        }
    }

}
