import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('Wonders of the world','john','ian')
  ]

  upvote(i){
    this.quotes[i].upvotes ++;
  }
  downvote(i){
    this.quotes[i].downvotes ++;
  }
  delQuote(i){
    this.quotes.splice(i,1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



  constructor() { }

  ngOnInit(): void {
  }

}
