import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();

  toggleSidebar: boolean = false;

  onButtonClick() {
    this.toggleSidebar = !this.toggleSidebar;
    this.sidebarToggle.emit(this.toggleSidebar);
  }
}
