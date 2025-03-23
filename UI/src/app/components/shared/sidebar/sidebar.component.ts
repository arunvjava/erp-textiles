import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(
    private router: Router,
    private sharedService: SharedService) { }

  isSidebarOpen = true;
  sidebarToggleClass = 'bx-chevrons-right';
  companyName = 'Senthur Tex';

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggleClass = this.sidebarToggleClass === 'bx-chevrons-right' ? 'bx-chevrons-left' : 'bx-chevrons-right';
    this.companyName = this.companyName === 'Senthur Tex' ? '' : 'Senthur Tex';
  }

  navigate(url: string) {
    this.sharedService.updateCurrentActivePath(url);
    this.router.navigate([url]);
  }
}
