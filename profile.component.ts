import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/login.service';
import {HomeComponent} from '../home/home.component';
@Component({
    selector: 'profile',
    templateUrl: `./profile.html`
})
export class ProfileComponent {
    public loginDetail: boolean;
    public games: [{ game: string, platform: string, release: string }];
    public searchString: string;
    public message: string;
    homepage: number;

    constructor(private route: Router, private _loginService: UserService) {
        this.homepage = 20;
    };

   getChildMessage(event: any) {
   this.message = event;
  }
    ngOnInit() {

    }

}

