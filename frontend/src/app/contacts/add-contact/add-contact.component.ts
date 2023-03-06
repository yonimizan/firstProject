import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { allContacts } from '../contacts.interface';

import { Contact } from './add-Contact.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  allcontacts?:allContacts
  contact? : Contact;
  Form?: FormGroup;
  isSended= false;
  sub?: Subscription;
  
 
  buildForm(item?: Contact) {
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
        address: new FormControl('',[
        Validators.required,
    ]),
    });
}

addContact(){
  const sub = this.http.post<Contact[]>("addContact", this.Form?.value).pipe(finalize(() => {
      if (sub?.unsubscribe) {
          sub.unsubscribe();
      }
  })).subscribe(data => {
      this.isSended = true;
      this.router.navigate(['/contacts']);
      
  });
}

getContact(id: string) {
  const sub = this.http.get<allContacts>(`contact/${id}`).subscribe(item => {
      this.allcontacts = item;
      this.buildForm(item);
      sub.unsubscribe();
  });
}



constructor (private router: Router, private http:HttpService, private route: ActivatedRoute){

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

}
