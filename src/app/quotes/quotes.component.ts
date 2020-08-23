import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('Nobody can make you feel inferior without your permission','Eleanor Roosevelt','Ian Wilbert'),
    new Quotes('You can never plan the future by the past', 'Edmund Burke', 'John Karima')
  ]

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }
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
