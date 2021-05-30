import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DocserviceService {

  user:User;
  validateUser(emailId: string, password: string) {
    const headers = new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.get('http://localhost:8777/doc/validate_user/' +emailId +'/' +password,{ headers })
    ;

  }
 
  
  registerUser(user:User)
  {
    const headers = new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8777/doc/register_user",user);

  }
  updateDocs: Docs;
  constructor(private httpService: HttpClient) { }

  public getDoc(id: number): Observable<Blob> {
    console.log("in service get docs" + id);
    return this.httpService.get("http://localhost:8777/doc/getFile/" + id, {
      responseType: 'blob'
    });
  }

  public addDoc(formdata: FormData,user:User): Observable<any> {
    console.log("in service add");
    console.log(formdata);
    return this.httpService.post("http://localhost:8777/doc/uploadFiles/"+Number(localStorage.getItem('userId')), formdata, { observe: 'response', reportProgress: true  });

  }

  public getAllDocs() {
    console.log("in getall service");
    return this.httpService.get<Docs[]>('http://localhost:8777/doc/getFiles');
  }
  public getAllDocsByUser(userId:number) {
    console.log("in getall service");
    return this.httpService.get<Docs[]>("http://localhost:8777/doc/getUserFiles/"+userId);
  }
  public onUpdate(formdata: FormData, id) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8777/doc/UpdateDoc/" + id, formdata, { observe: 'response' });
  }
  public editDoc(formdata: FormData, id: number) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8777/doc/UpdateDoc/" + id, formdata, { observe: 'response' });
  }

  public delete(id: number) {
    console.log("in service delete");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8777/doc/DeleteDoc/" + id, { headers, responseType: 'text' });
  }

  public count() {
    console.log("in service count");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8777/doc/getCount");
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
  docData: string;
  createdAt : Date;
  constructor(id: number, title: string, category: string, docName: string, docType: string, docData: string, createdAt: Date) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.docName = docName;
    this.docType = docType;
    this.docData = docData;
    this.createdAt = createdAt;
  }}
  export class userLogin {
    emailId: string;
    password: string;
  }
  export class User {
    userId:number;
    username:string;
    emailId: string;
    password: string;

    constructor(userId:number,username:string,emailId:string,password:string){
      this.userId=userId;
      this.username=username;
      this.emailId=emailId;
      this.password=password;
    }
  }