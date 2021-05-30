import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookcontentService } from 'src/app/services/bookcontent.service';

@Component({
  selector: 'app-content-book',
  templateUrl: './content-book.component.html',
  styleUrls: ['./content-book.component.css']
})
export class ContentBookComponent implements OnInit {
  id:any
  content:any;
  constructor(private route:ActivatedRoute, private cb:BookcontentService) { 
    this.route.params.subscribe(params=>
      this.id=params["id"]),
      ()=>this.id={}


    this.cb.getDetails(this.id).subscribe(
      (data)=>this.content=data,
      ()=>this.content={}
    )


  }

  ngOnInit(): void {
  }

}
function data(data: any, any: any): any {
  throw new Error('Function not implemented.');
}

