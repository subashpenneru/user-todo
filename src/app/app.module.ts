import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// COMPONENTS
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// SERVICES
import { DataService } from './service/data.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUsersComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
