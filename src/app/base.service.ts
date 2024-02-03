import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/"
  meresekSub= new BehaviorSubject<any>(null)
  
  constructor(private http: HttpClient) { 
    this.loadAll()
  }

  loadAll(){
    this.http.get(this.url+".json").subscribe(
      (res)=> this.meresekSub.next(res)
    )
  }
  getAll(){
    return this.meresekSub
  }

  ment(meres:any){
    let key= meres.key
    delete meres.key
    this.http.put(this.url+key+".json", meres).forEach(
      (res)=>this.loadAll()
    )
  }
  torol(meres:any){
    let key= meres.key   
    this.http.delete(this.url+key+".json").forEach(
      (res)=>this.loadAll()
    )
  }



 hozzaad(body:any){
    return this.http.post(this.url+".json",body)
  }

  testPostData(body:any){
    return this.http.post(this.url+".json",{
      "evszam": 1880,
      "magyar": 227894,
      "nemet": 138423,
      "szlovak": 25637,
      "egyeb": 10752
    })
  }
}
