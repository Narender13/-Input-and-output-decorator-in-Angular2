

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/login.service';
import { AuthguardGuard } from './authGuard.guard';
import { MessageService } from './service/message.service';
import {PaginationComponent} from './Pagination/pagination.component';
import { FormComponent } from './form/form.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {CustomerEmailFilter} from './pagination/CustomerEmailFilter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ProfileComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    PaginationComponent,
    FormComponent,
    CustomerEmailFilter,
  ],
  providers: [UserService, AuthguardGuard, MessageService],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
