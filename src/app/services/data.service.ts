import { Injectable } from '@angular/core';
import { content } from 'src/model data/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {




  constructor() { }
 
  getAbout(){
    return content.about;
  }

  getOverview(){
    return content.overview
  }
}
