import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

private url: string="https://digimon-api.vercel.app/api/digimon/name"

constructor( private http : HttpClient) { }

  getDigimon(name:string){
    return this.http.get(`${this.url}/${name}`)
  }


}
