import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from "../shared/services/window.service";
import { UserService } from "../shared/services/user.service";
import { IUser } from "../shared/interfaces/user.interface";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-search-user',
    templateUrl: 'search-user.component.html',
    styleUrls: ['search-user.component.css']
})

export class SearchComponent implements OnInit {

    users: Observable<IUser[]>;
    xUsers: any;
    selectedUser: IUser;
    private searchTerms = new Subject<string>();
    orderColumn: string = '';
    reverse: boolean = false;
    isLoaded: boolean = true;
    isEmpty: boolean = true;
    currentPage = 1;

    constructor(private userService: UserService,
        private router: Router,
        private winRef: WindowRef) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit() {

        this.users = this.searchTerms.debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(term => {
                this.isLoaded = false;
                if (term) {
                    return this.userService.searchByName(term);
                } else {
                    return Observable.of<IUser[]>([]);
                }

            })
            .catch(error => {
                console.log(error);
                return Observable.of<IUser[]>([]);
            });

        this.users.subscribe(result => {
            this.xUsers = result;
            this.isEmpty = result.length == 0;
            this.isLoaded = true;
        });
    }

    setOrder(order: string) {

        this.orderColumn = order;
        this.reverse = !this.reverse;
    }

    selectUser(user: IUser) {

        this.selectedUser = user;
    }

    viewDetails(user: IUser) {

        this.router.navigate(['users', user.id]);
    }

    edit(user: IUser) {

        this.router.navigate(['users/update', user.id]);
    }

    remove() {

        this.isLoaded = false;

        this.userService.delete(this.selectedUser).subscribe(
            response => {
                this.isLoaded = true;
                console.log(response);
                this.winRef.nativeWindow.showAlertMessage();
                this.xUsers.splice(
                    this.xUsers.indexOf(this.selectedUser), 1
                );
                this.selectedUser = null;
            },
            error => console.log(error)
        )
    }

    loadPage(page) {
        this.currentPage = page;
    }

    turnPage(page) {
        this.currentPage = page;
    }

    pagesArray(lastPage: number): number[] {

        return Array.apply(null, { length: lastPage })
            .map((value, index) => index + 1);
    }

}