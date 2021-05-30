import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docs, DocserviceService, User } from '../docservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count : number;
  docs : Docs[];
  userId:number;
  constructor(private docservice: DocserviceService, private router: Router,   private activatedRoute: ActivatedRoute) { }
  ngOnInit(): any {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.userId+"in dashboard");
    
     this.docservice.getAllDocsByUser(this.userId).subscribe(
       response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response) {
    this.docs = response;
  }

  toDoc() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/documents', this.userId]);
  }
  getDocs(docs: Docs) {
    this.docservice.getDoc(docs.id).subscribe(
      (blob => saveAs(blob, docs.docName))
    );
  }

delete(deleteDoc: Docs): any {
var selction = confirm("Are you sure !!")
if (selction == true) {
  this.docs.splice(this.docs.indexOf(deleteDoc), 1);
  this.docservice.delete(deleteDoc.id).subscribe(data => {
    alert(data);
  });
}
this.router.navigate(['/dashboard',this.userId]);
  }

 
 
}
