import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user: User;
  userId: number;
  constructor(private docservice: DocserviceService, private router: Router) { }
  

  ngOnInit(): void {
  }
  toDash() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/dashboard', this.userId]);
  }
}
