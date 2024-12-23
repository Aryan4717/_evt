import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activePage: string = '';
  pageList: string[] = ['', 'home', 'events', 'tasks', 'users'];

  constructor(private router: Router) {
    const currURL = window.location.pathname.split('/')[1];
    (this.pageList.includes(currURL)) ? this.activePage = currURL : this.goTo('home');
  }

  goTo(route: string) {
    this.router.navigateByUrl(route);
    this.activePage = route.split('/')[1];
  } 
}
