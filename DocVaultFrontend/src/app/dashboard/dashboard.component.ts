import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docs, DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count : number;
  docs : Docs[];

  constructor(private docservice: DocserviceService, private router: Router) { }
  ngOnInit(): any {
    this.docservice.getAllDocs().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response) {
    this.docs = response;
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
this.router.navigate(['/dashboard']);
  }

 
 
}
