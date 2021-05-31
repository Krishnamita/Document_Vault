import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: number;
  constructor(private docservice: DocserviceService, private router: Router) { }


  ngOnInit(): void {
    console.log(localStorage)
    this.userId = Number(localStorage.getItem('userId'));
    
    this.docservice.getUser(this.userId).subscribe(
      response => this.handleSuccessfulResponse(response)
    )
    }
  handleSuccessfulResponse(response) {
    this.user = response;
  }
  toDash() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/dashboard', this.userId]);
  }

}
