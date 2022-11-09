import { Component, Input } from '@angular/core';
import { Article } from './../models/article.model';
import { ArticleData } from './../data/data';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article = {title:'', description:'', author:'', imageUrl:''};
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn:boolean = false;
  imageIsShown:boolean = false;
  imageButtonTitle:string = "Show Image";

  constructor() { 
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore():void {
    this.articleDescLen = this.descToShow.length;
    if (this.articleDescLen<this.articleDesc.length) {
      if (this.articleDescLen+this.symbols<=this.articleDesc.length){
        this.articleDescLen+=this.symbols;
      }
      else{
        this.articleDescLen = this.articleDesc.length;
        this.showReadMoreBtn = false;
        this.showHideBtn = true;
      }
      
      this.descToShow = this.articleDesc.slice(0,this.articleDescLen);
    } 
    else{
    this.showReadMoreBtn = false;
   }
  }

  hideDesc():void{
    this.descToShow = '';
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  toggleImage():void{
    this.imageIsShown = ! this.imageIsShown;
  }

}
