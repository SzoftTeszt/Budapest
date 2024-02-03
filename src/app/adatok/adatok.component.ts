import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
 
  meresek:any;
  oszlopok=["evszam","magyar","nemet","szlovak","egyeb"]

  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res:any)=>{
        this.meresek=[]
        for (const key in res) {
          this.meresek.push({key:key, ...res[key]})            
          }
          //console.log(this.meresek)
        }  
    )
  }

  post(){
    this.base.testPostData("").subscribe(
      (res)=>console.log(res)
    )
  }
  ment(meres:any){
    this.base.ment(meres)
    
  }
  torol(meres:any){
    this.base.torol(meres)
  }


}
