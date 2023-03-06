import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { allContacts } from '../contacts.interface';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
contacts?: allContacts;
sub?: Subscription;
form?: FormGroup;

buildForm(item?: allContacts) {
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
      address: new FormControl(item?.address, [
        Validators.required,
    ]),
    });
}

add() {
    const sub = this.http.post<allContacts>(`contacts`, this.form?.value).subscribe((item: any) => {
        this.router.navigate(['contacts']);
        sub.unsubscribe();
    });
}

save() {
    const sub = this.http.put<void>(`contacts/${this.contacts?.id}`, this.form?.value).subscribe(() => {
        this.router.navigate(['contacts']);
        sub.unsubscribe();
    });
}

getContact(id: string) {
    const sub = this.http.get<allContacts>(`contact/${id}`).subscribe(item => {
        this.contacts = item;
        this.buildForm(item);
        sub.unsubscribe();
    });
}

constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

    this.sub = this.route.params.subscribe(params => {
        if (params['id']) {
            this.getContact(params['id']);
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
