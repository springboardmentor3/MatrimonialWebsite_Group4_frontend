import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen = false; // Flag to track sidebar state
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
