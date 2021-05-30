import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docs, DocserviceService } from '../docservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  reactiveForm: FormGroup;
  title: string;
  category: string;
  file: File;
  message: string;
  filestatus: Response;
  submitted = false;
  private subscription: Subscription | undefined;
  waitmessage: string;
  info: string;
  
  
  constructor(private docservice: DocserviceService, private router: Router) { }

  ngOnInit() {
    this.submitted=false;
    this.reactiveForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
      category: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public onFileChanged(event) {
    this.file = event.target.files[0];
    }

  addDocForm() {
    this.submitted = false;
    this.reactiveForm.reset();
  }

  saveDoc(submitForm: FormGroup): any {
    
    const details = submitForm.value;
    const formData = new FormData();
    formData.append('details', JSON.stringify(details));
    formData.append('file', this.file);
    this.submitted = true;
    this.waitmessage = "Please wait...";
    this.docservice.addDoc(formData).subscribe((data) => {
      this.filestatus=data;
 
      if (this.filestatus.status === 200) {
         this.waitmessage = "";
          this.message = 'Document uploaded successfully!';
          this.info = "You may close and reload the page to view changes."
          
        } else {
          this.message = 'Document not uploaded successfully';
      }
    },
      error => {
        this.waitmessage = "";
        this.message="Make sure you uploaded file within 10MB.";
      }      
    );
  
    
  }
  
  
}

