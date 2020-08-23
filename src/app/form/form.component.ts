import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteWords:string
  quoteEditor:string
  quoteAuthor:string
  quoteDate:number
  theWords:any

  submitQuote(){
    this.theWords = new Quotes(this.quoteEditor,this.quoteAuthor,this.quoteWords)
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.emitQuote.emit(this.theWords)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
