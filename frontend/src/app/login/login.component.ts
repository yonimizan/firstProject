
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { finalize } from 'rxjs/operators';
import { UserLogin } from './login.interface';
import { UtilityService } from '../Utility.Service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../signup/signup.component.scss']
})
export class LoginComponent {
    errorMessage?: string;

    loginForm = new FormGroup({
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(12),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
        ]),
    });

    login() {
        this.errorMessage = '';

        const sub = this.http.post<UserLogin>('login', this.loginForm.value).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.errorMessage = data.message;
            } else {
                this.utility.setUser(data.user);
                this.router.navigate(['']);
            }
        });
    }

    constructor(private http: HttpService, private utility: UtilityService, private router: Router) { }


ngOnInit() {
    if (this.utility.getUser()) {
        this.router.navigate(['customers']);
    }
        // @ts-ignore
        google.accounts.id.initialize({
          client_id: "327261936767-po13om2472e4p3kii0rn7bp9ualgr84a.apps.googleusercontent.com",
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true,
      
        });
        // @ts-ignore
        google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("google-button"),
          { theme: "outline", size: "large", width: "10%" }
        );
        // @ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {});
      }  
      async handleCredentialResponse(response: any) {
        // Here will be your response from Google.
        console.log(response);
      }
  }


