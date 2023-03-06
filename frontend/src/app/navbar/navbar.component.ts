import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../Utility.Service';
import {Nav} from './navbar.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active : string = '';
  isOpen : boolean= false;

  

  menu: Nav []= [
    { route: '/', title: ' ', icon: 'fa fa-home' },
    { route: '/login', title: 'Login', icon: 'fa fa-login', isLogin: true },
    { route: '/signup', title: 'Sign Up', icon: 'fa fa-signup',isLogin: true },
    { route: '/customers', title: 'לקוחות', icon: ''},
    { route: '/contacts', title: 'אנשי קשר', icon: ''},
   
  ];
  sidebar: Nav[] = [
    ...this.menu,


];

  
  constructor(router: Router, public utility: UtilityService) {

    router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
            this.active = ev.url;
            this.isOpen= false;
        }
    });

}

  

  ngOnInit() {}
}
