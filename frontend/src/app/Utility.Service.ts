import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private user?: User;
    public modeContact?: string = 'table'
    public modeCustomer?: string = 'table'

    setUser(user?: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

        
    currentDisplayModeContacts(mode: string) {
        this.modeContact = mode;
    }

    currentDisplayModeCustomers(mode: string) {
        this.modeCustomer = mode;
    }


    constructor() { }
}