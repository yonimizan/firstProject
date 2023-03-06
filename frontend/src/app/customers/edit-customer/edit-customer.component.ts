import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { User } from '../customers.interface';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {

customer?: User;
sub?: Subscription;
form?: FormGroup;

buildForm(item?: User) {
    this.form = new FormGroup({
        firstName: new FormControl(item?.firstName, [
            Validators.required,
        ]),
        lastName: new FormControl(item?.lastName, [
            Validators.required,
        ]),
        email: new FormControl(item?.email, [
            Validators.required,
        ]),
        phone: new FormControl(item?.phone, [
          Validators.required,
      ]),
  
    });
}

add() {
    const sub = this.http.post<User>(`customers`, this.form?.value).subscribe((item: any) => {
        this.router.navigate(['customers']);
        sub.unsubscribe();
    });
}

save() {
    const sub = this.http.put<void>(`customers/${this.customer?.id}`, this.form?.value).subscribe(() => {
        this.router.navigate(['customers']);
        sub.unsubscribe();
    });
}

getCustomer(id: string) {
    const sub = this.http.get<User>(`customer/${id}`).subscribe(item => {
        this.customer = item;
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

ngOnDestroy() {
    this.sub?.unsubscribe();
}


}



