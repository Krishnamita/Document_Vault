import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User;
  userId: number;
  constructor(private docservice: DocserviceService, private router: Router) { }


  ngOnInit(): void {
  }
  toDash() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/dashboard', this.userId]);
  }

  toDoc() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/documents', this.userId]);
  }

  toDetails() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/details', this.userId]);
  }
}
