import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private docservice: DocserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  user: User;
  result:boolean;
  onSubmit(userResgister:User): any {
    console.log(userResgister.username);
    console.log(userResgister.emailId);
    console.log(userResgister.password);
    this.docservice
      .registerUser(userResgister)
      .subscribe((data: any) => {
        this.result = data;
        console.log(data)
        if (this.result == false) {
          alert('Somthing Went Wrong, minlength of password is 6');
        } else {
          alert('Registered Successful...Login');
          console.log(this.result);
          this.router.navigate(['/sign-in']);
        }
      });
  }
}