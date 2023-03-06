import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { FooterComponent } from "./footer/footer.component";
import { CustomersComponent } from "./customers/customers.component";
import { AddCustomerComponent } from "./customers/add-customer/add-customer.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AddContactComponent } from "./contacts/add-contact/add-contact.component";
import { EditContactComponent } from "./contacts/edit-contact/edit-contact.component";
import { EditCustomerComponent } from "./customers/edit-customer/edit-customer.component";





export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'customers', component: CustomersComponent}, 
    { path: 'add-customer', component: AddCustomerComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: 'contacts/:id', component: EditContactComponent},
    { path: 'add-Contact', component: AddContactComponent},
    { path: 'edit-Contact', component: EditContactComponent},
    { path: 'contacts/customers/:id', component: ContactsComponent },
    { path: 'edit-Customer', component: EditCustomerComponent},
    { path: 'Customers/:id', component: EditCustomerComponent},
       
];