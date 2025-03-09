import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // isCollapsed = false;
  // submenuOpen = false;

  // toggleSidebar() {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  // toggleSubmenu() {
  //   this.submenuOpen = !this.submenuOpen;
  // }
}
