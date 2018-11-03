import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/services/user.service";
import { IUser } from "../shared/interfaces/user.interface";
import { WindowRef } from "../shared/services/window.service";

@Component({    
    selector: 'app-add-user',
    templateUrl: 'add-user.component.html'
})

export class AddUserComponent implements OnInit {
    
    user:IUser={id:'',name:'',age:'',city:''};
    isLoaded:boolean=true;

    constructor(private userService:UserService,
    private winRef: WindowRef) { }

    ngOnInit() { }

    add() {
        
        this.isLoaded=false;

        this.userService.create(this.user).subscribe(
            response=> {
                this.isLoaded=true;
                this.winRef.nativeWindow.showAlertMessage();
            },
            error=>{
                console.log(error);               
            }
        ); 

        this.user= {id:'',name:'',age:'',city:''};
    }

}