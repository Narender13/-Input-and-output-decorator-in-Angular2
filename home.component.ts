import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Http, Response, Request, RequestMethod } from '@angular/http';
import { UserService } from '../service/login.service'
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';
//import {ProfileComponent} from '../profile/profile.component';

@Component({
    selector: 'homepage',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
    loggedIn: boolean;
    @Input()
    getnumber: number = 0;
    @Output()
    change: EventEmitter<string> = new EventEmitter<string>();

    constructor(private messageService: MessageService,
        private _formBuilder: FormBuilder, private router: Router,
        private user: UserService) {
        this.sendMessage();
        this.getnumber = 0;

    }
    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('true');

    }

    emitMessage(): void {
        this.change.emit('Message from child component');
    }

    ngOnInit() {
        this.messageService.sendLoadingMessage('binding done');
        this.handdleNavClick();
    }
    handdleNavClick() {
        let a = document.querySelector('.navbar-nav');
        a.addEventListener('click', function () {
            document.querySelector('.navbar-collapse').setAttribute('class', 'navbar-collapse collapse navbar-ex1-collapse');
        });
    }


}