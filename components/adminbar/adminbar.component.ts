import { Component } from '@angular/core';

@Component({
  selector: 'app-adminbar',
  templateUrl: './adminbar.component.html',
  styleUrl: './adminbar.component.css'
})
export class AdminbarComponent {
  isOpen = true; // Flag to track sidebar state
  closeBtnIcon = 'bx-menu'; // Icon class for close button

  constructor() { }

  ngOnInit() { }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggleCloseBtnIcon(); // Update icon based on isOpen
  }

  toggleCloseBtnIcon() {
    this.closeBtnIcon = this.isOpen ? 'bx-menu-alt-right' : 'bx-menu';
  }

}
