import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService, User, userLogin } from '../docservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private docservice: DocserviceService, private router: Router) { }
  user: User;
  userId:number;
  ngOnInit(): void {
  }

  onSubmit(userLogin:userLogin): any {
    console.log(userLogin.emailId);
    console.log(userLogin.password);
    this.docservice
      .validateUser(userLogin.emailId, userLogin.password)
      .subscribe((data: any) => {
        this.user = data;
     
        console.log(data)
        if (this.user == null) {
          alert('Invalid Credentails');
        } else {
          alert('Login Successful');
          console.log(this.user.userId,this.user.username,this.user.emailId,this.user.password);
          localStorage.setItem('userId',""+this.user.userId);
        this.userId=Number(localStorage.getItem('userId'));
        console.log("after login userId using localstorage ..."+this.userId);
          this.router.navigate(['/dashboard', this.userId]);
        }
      });
  }
}
