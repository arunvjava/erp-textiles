import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, RouterModule, NgFor, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  currentActiveURL = '';

  constructor(
    private router: Router,
    public sharedService: SharedService) { }

  isSidebarOpen: boolean = true;

  onSidebarToggle() {
    console.log('Sidebar toggled');
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  getCurrentActivePath() {
    console.log(this.sharedService.currentActivePathURL());
    return this.sharedService.currentActivePathURL();
  }

  breadCrumb() {
    let currentURL = this.sharedService.currentActivePathURL();
    return currentURL.split('/').slice(1, currentURL.split('/').length);
  }

}
