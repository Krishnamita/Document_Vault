import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocserviceService {
  updateDocs: Docs;
  constructor(private httpService: HttpClient) { }

  public getDoc(id: number): Observable<Blob> {
    console.log("in service get docs" + id);
    return this.httpService.get("http://localhost:8777/doc/getFile/" + id, {
      responseType: 'blob'
  });
}

  public addDoc(formdata: FormData): Observable<any> {
    console.log("in service add");
    console.log(formdata);
    return this.httpService.post("http://localhost:8777/doc/uploadFiles", formdata, { observe: 'response' });
      
  }

  public getAllDocs(){
    console.log("in getall service");
    return this.httpService.get<Docs[]>('http://localhost:8777/doc/getFiles');
  }

  public onUpdate(updateDocs: Docs) {
    console.log("ins service update");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8586/employees/UpdateEmployee", updateDocs, { headers, responseType: 'text' });
  }

  public update(updateDocs: Docs) {
    this.updateDocs = updateDocs;
  }
  public updateMethod() {
    return this.updateDocs;
  }
}

 

export class Response {
  message: string;
  verfId: string;

}

export class Docs {
  id: number;
  title: string;
  category: string;
  docName: string;
  docType: string;
  docData:string
  constructor(id: number, title: string, category: string, docName: string, docType: string, docData : string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.docName = docName;
    this.docType = docType;
    this.docData = docData;
  }
}