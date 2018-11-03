import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from "../shared/services/user.service";
import { IUser } from "../shared/interfaces/user.interface";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-deteails',
    templateUrl: 'user-details.component.html'
})

export class UserDetailsComponent implements OnInit {
    
    user:IUser={id:'',name:'',age:'',city:''};
    isLoaded:boolean=false;

    constructor(private userService:UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router) { }

    ngOnInit() {
        
        this.route.paramMap
        .switchMap( (params:ParamMap)=>
        this.userService.getById(+params.get('id')))
        .subscribe(response=>{
                this.user=response;
                this.isLoaded=true;
                }
            ,error=> {
                this.router.navigate(['/pagenotfound']);
               return error; 
            } );
     }

}