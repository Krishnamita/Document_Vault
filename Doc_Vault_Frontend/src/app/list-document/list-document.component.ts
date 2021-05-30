import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docs, DocserviceService } from '../docservice.service';
import { saveAs } from 'file-saver-es';


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {
  userId: number;
  message: string;
  docs : Docs[];
  doclist: any;
  searchValue: string;
  totalRec:number;
  page: number = 1;
  
  constructor(private docservice: DocserviceService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.docservice.getAllDocsByUser(this.userId).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  toDetails() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/details', this.userId]);
  }
  getDocList(){
    this.docservice.getAllDocs().subscribe(response=>{
      this.doclist=response;
      this.totalRec = this.doclist.length;

    });
  }

  getDocs(docs : Docs){
    this.docservice.getDoc(docs.id).subscribe(
      (blob => saveAs(blob, docs.docName))
    );
  }

  handleSuccessfulResponse(response) {
    this.docs = response;
  }
  delete(deleteDoc: Docs): any {
    var selction = confirm("Are you sure !!")
    if (selction == true) {
      this.docs.splice(this.docs.indexOf(deleteDoc), 1);
      this.docservice.delete(deleteDoc.id).subscribe(data => {
        alert(data);
      });
    }
    this.router.navigate(['/documents']);
  }

 
}

