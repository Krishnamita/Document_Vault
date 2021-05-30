import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-dashnavbar',
  templateUrl: './dashnavbar.component.html',
  styleUrls: ['./dashnavbar.component.css']
})
export class DashnavbarComponent implements OnInit {
  user: User;
  userId: number;
  constructor(private docservice: DocserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  toDash(){
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/dashboard', this.userId]);
  }

  toDoc() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/documents', this.userId]);
  }
}
