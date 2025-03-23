import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = true;
  sidebarToggleClass = 'bx-chevrons-right';
  companyName = 'Senthur Tex';

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggleClass = this.sidebarToggleClass === 'bx-chevrons-right' ? 'bx-chevrons-left' : 'bx-chevrons-right';
    this.companyName = this.companyName === 'Senthur Tex' ? '' : 'Senthur Tex';
  }

}
