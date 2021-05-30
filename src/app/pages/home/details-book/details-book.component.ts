import { Component, Input, OnInit } from '@angular/core';
import { BookdetailsService } from 'src/app/services/bookdetails.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
@Input() details:any;
  constructor(private bd:BookdetailsService) {}
  
  ngOnInit(): void {
  }

}
