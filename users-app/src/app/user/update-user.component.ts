import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators }  from '@angular/forms';
import { WindowRef } from "../shared/services/window.service";

import { UserService } from "../shared/services/user.service";
import { IUser } from "../shared/interfaces/user.interface";


@Component({
    selector: 'update-user',
    templateUrl: 'update-user.component.html'
})

export class UpdateUserComponent implements OnInit {
    
    isLoaded:boolean;
    userForm:FormGroup;
    user:IUser={id:'',name:'',age:'',city:''};    

    constructor(private userService:UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private winRef: WindowRef) {

        this.createForm();
     }
    
    createForm(){

        this.userForm=this.formBuilder.group({
            id:'',
            name:['',Validators.required],
            age:['',Validators.required],
            city:['',Validators.required]
        });
    }


    save(user){        
        
        this.isLoaded=false;

        this.userService.update( user ).subscribe(
            response=>{
                this.isLoaded=true;
                //if the server returns the updated object
                //console.log(response);
                console.log(`${user.id} updated`);
                this.winRef.nativeWindow.showAlertMessage();
            },
            error=>console.log(error)
        );
        
    }

    ngOnInit() {
        this.route.paramMap
        .switchMap( (params:ParamMap)=>
        this.userService.getById(+params.get('id')))
        .subscribe(response=>{
                this.user=response;
                this.fillForm();
                this.isLoaded=true;
                }
            ,error=> {
                this.router.navigate(['/pagenotfound']);
               return error; 
            } );

        }


     fillForm(){

         this.userForm.setValue({
             id:this.user.id,
             name:this.user.name,
             age: this.user.age,
             city:this.user.city
         });

     }

}