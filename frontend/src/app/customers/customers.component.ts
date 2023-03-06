import { Component } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { User } from './customers.interface';
import { Customer } from './add-customer/add-customers.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
 
  data: User[] = [];
  customer? : Customer;
  Form? : FormGroup;
  sub?: Subscription;
  displayMode: 'table'| 'folders' = 'table';

  
  buildForm(item?: Customer) {
    this.Form = new FormGroup({
      firstName: new FormControl('',[
            Validators.required,
        ]),
        lastName: new FormControl('',[
            Validators.required,
        ]),
        email: new FormControl('',[
            Validators.required,
        ]),
        phone: new FormControl('',[
          Validators.required,
      ]),
    });
}
 



delete(item: User) {
  if (!confirm('האם למחוק לקוח?')) {
      return;
  }

  const sub = this.http.delete<void>(`customers/${item.id}`).subscribe(() => {
      const i = this.data.findIndex(x => x.id === item.id);
      this.data.splice(i, 1);
      sub.unsubscribe();
  });
}

    
  constructor( private http: HttpService, private router: Router) { }
  
  

  ngOnInit(){
       const sub= this.http.get<User[]>('customers').pipe(finalize(() => {
          if (sub.unsubscribe){
            sub.unsubscribe();
          }
           })).subscribe(data => {
               this.data=data
           })
          
          }

}
