import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from 'src/app/services/bookdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

service:any;
  constructor(private bs:BookdetailsService) { 
    this.bs.getBooks().subscribe( 
      (data)=> this.service=data,
      ()=>this.service=["connection loss"]
    );
  }

  ngOnInit(): void {
  
  }

}
