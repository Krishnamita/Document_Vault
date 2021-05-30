import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docs, DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  userId: number;
  docs: Docs[];

  constructor(private docservice: DocserviceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): any {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.docservice.getAllDocsByUser(this.userId).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response) {
    this.docs = response;
  }

}
