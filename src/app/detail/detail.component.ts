import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() quote:Quotes;

  upvotes = 0;
  downvotes = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
