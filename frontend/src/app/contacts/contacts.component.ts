import { Component } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { allContacts } from './contacts.interface';
import { Contact } from './add-contact/add-Contact.interface';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  data: allContacts[] = [];
  Form?: FormGroup;
  search?: "";
  
  sub?: Subscription;
  displayMode: 'table'| 'folders' = 'table';
  allContacts: allContacts[]=[];
  



  buildForm(item?: allContacts) {
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



delete(item: allContacts) {
  if (!confirm('האם למחוק איש קשר?')) {
      return;
  }

  const sub = this.http.delete<void>(`contacts/${item.id}`).subscribe(() => {
      const i = this.data.findIndex(x => x.id === item.id);
      this.data.splice(i, 1);
      sub.unsubscribe();
  });
}





     constructor (private router: Router , private http: HttpService , private route: ActivatedRoute) { }

ngOnInit() {
  const sub= this.http.get<allContacts[]>('contacts').pipe(finalize(() => {
     if (sub.unsubscribe){
       sub.unsubscribe();
     }
      })).subscribe(data => {
          this.data=data
      })
     
     }

}
