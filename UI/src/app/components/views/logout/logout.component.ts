import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor() {
    // Clear all the references and logout
    localStorage.clear();
    sessionStorage.clear();
  }

}
