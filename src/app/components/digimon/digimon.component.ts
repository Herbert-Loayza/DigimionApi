import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/services/digimon.service';


@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {

  name:string=''
  imagen:any=''
  constructor( private digimonService : DigimonService ) { }

  ngOnInit(): void {
  }

  searchDG(){
    this.digimonService.getDigimon(this.name).subscribe((data: any)=>{
      this.imagen= data[0].img;
    })
  }

}
