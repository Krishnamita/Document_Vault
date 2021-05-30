import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Docs, DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count : number;
  docs : Docs[];
  editForm: FormGroup; 
  message: string;
  updatestatus: Response;
  submitted = false;
  private subscription: Subscription | undefined;
  waitmessage: string;
  info: string;
  file2: File;

  constructor(private docservice: DocserviceService, private router: Router) { }
  ngOnInit(): any {
    this.submitted = false;
    this.docservice.getAllDocs().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    this.editForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      category: new FormControl('', Validators.required)
    });     
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public onFileChanged(event) {
    this.file2 = event.target.files[0];
  }
  update(d : Docs){
    console.log(d.docData);
    this.editForm.patchValue(
      {id: d.id,
        title: d.title,
      category: d.category,
    }
    )
  }
  handleSuccessfulResponse(response) {
    this.docs = response;
  }

  getDocs(docs: Docs) {
    this.docservice.getDoc(docs.id).subscribe(
      (blob => saveAs(blob, docs.docName))
    );
  }

  updateDoc(submitForm: FormGroup): any{
    const id = submitForm.value.id;
    const details = submitForm.value;
    const formData = new FormData();
    formData.append('details', JSON.stringify(details));
    formData.append('file', this.file2);
    this.submitted = true;
    this.waitmessage = "Please wait...";
    this.docservice.editDoc(formData, id).subscribe((response) => {
      console.log(response.status);
      // this.updatestatus=response;

      if (response.status === 200) {
        this.waitmessage = "";
        this.message = 'Document updated successfully!';
        this.info = "You may close and reload the page to view changes."

      } else {
        this.message = 'Document not updated successfully';
      }
    },
      error => {
        this.waitmessage = "";
        this.message = "Make sure you uploaded file within 10MB.";
      }
    );


  }


delete(deleteDoc: Docs): any {
  console.log(deleteDoc.docType);
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
