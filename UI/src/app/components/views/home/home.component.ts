import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isSidebarOpen: boolean = true;

  onSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
