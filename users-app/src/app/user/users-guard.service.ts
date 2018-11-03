import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivate,Router } from "@angular/router";
import { WindowRef } from "../shared/services/window.service";

@Injectable()
export class UserDetailsGuard implements CanActivate {

    constructor(private _router:Router,
        private winRef: WindowRef){}

    canActivate(route:ActivatedRouteSnapshot ) : boolean {
        
        let id=+route.url[0].path;

        if (isNaN(id) || id <1 ){
            this.winRef.nativeWindow.openModalDialogInvalid();
            //this._router.navigate(['users']);
            return false;
        }
        return true;

    }

}