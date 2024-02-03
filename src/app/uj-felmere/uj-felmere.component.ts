import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-felmere',
  templateUrl: './uj-felmere.component.html',
  styleUrls: ['./uj-felmere.component.css']
})
export class UjFelmereComponent {
  oszlopok=["evszam","magyar","nemet","szlovak","egyeb"]
  ujMeres:any={}

  constructor(private router: Router,private base: BaseService){
    this.ujMeres.evszam=100+(new Date().getFullYear())
  }

  hozzaad(){
    console.log(this.ujMeres)
    this.base.hozzaad(this.ujMeres).forEach(
      ()=>{
        this.base.loadAll()
        this.router.navigate(['/adatok'])}
    )
  }
}
