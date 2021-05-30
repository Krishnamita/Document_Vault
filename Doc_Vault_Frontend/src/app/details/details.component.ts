import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docs, DocserviceService } from '../docservice.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userId: number;
  message: string;
  docs: Docs[];
  doclist: any;
  searchValue: string;
  totalRec: number;
  page: number = 1;
  constructor(private docservice: DocserviceService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.docservice.getAllDocsByUser(this.userId).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  getDocList() {
    this.docservice.getAllDocs().subscribe(response => {
      this.doclist = response;
      this.totalRec = this.doclist.length;

    });
  }
  toDash() {
    this.userId = Number(localStorage.getItem('userId'));
    this.router.navigate(['/dashboard', this.userId]);
  }

  getDocs(docs: Docs) {
    this.docservice.getDoc(docs.id).subscribe(
      (blob => saveAs(blob, docs.docName))
    );
  }

  handleSuccessfulResponse(response) {
    this.docs = response;
  }

}


