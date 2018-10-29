import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptionsArgs,RequestOptions } from '@angular/http';
import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {
   ip="http://localhost:8000/";
  constructor(private http:Http) { }
  
  
  upload(jsn){
  return this.http.post(this.ip+'upload',jsn).map(res=>res.json());
  }
  
  getImg(){
  return this.http.get(this.ip+'getImg').map(res=>res.json());
  }
  
  getText(){
  return this.http.get(this.ip+'getText').map(res=>res.json());
  }

}
