import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isSidebarOpen: boolean = true;

  onSidebarToggle() {
    console.log('Sidebar toggled');
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
