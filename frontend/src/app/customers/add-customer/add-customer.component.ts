import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from './add-customers.interface'



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
    
  isSended= false;
  Customer?: Customer;
  sub?: Subscription;
  Form?: FormGroup;

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

  add(){
    const sub = this.http.post<Customer[]>("addcustomer", this.Form?.value).pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(data => {
        this.isSended = true;
        this.router.navigate(['/customers']);
        
    });
  }


  save() {
      const sub = this.http.put<void>(`customers/${this.Customer?.id}`, this.Form?.value).subscribe(() => {
          this.router.navigate(['customers']);
          sub.unsubscribe();
      });
  }

   getCustomer(id: string) {
      const sub = this.http.get<Customer>(`customer/${id}`).subscribe(item => {
          this.Customer = item;
          this.buildForm(item);
          sub.unsubscribe();
      });
  }

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

      this.sub = this.route.params.subscribe(params => {
          if (params['id']) {
              this.getCustomer(params['id']);
          } else {
              this.buildForm();
          }
      });

  }

  ngOnInit() {

  }


}