import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routes } from './routing';
import { HttpService } from './http.service';
import { UtilityService } from './Utility.Service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomersComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    CustomersComponent,
    AddCustomerComponent,
    ContactsComponent,
    AddContactComponent,
    EditContactComponent,
    EditCustomerComponent,

  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [
    HttpService,
    UtilityService,
 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
