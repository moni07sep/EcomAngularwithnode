import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor() { }
  public itemData;
  ngOnInit() {
    this.itemData=JSON.parse(localStorage.getItem("cartdata"));
  }

  delete(data){

  }
 
  plus(data){
    
    var inputValue = (<HTMLInputElement>document.getElementById(data)).value;
    let quant:number = 1 + Number(inputValue);
    (<HTMLInputElement>document.getElementById(data)).value =quant.toString()
  }
  minus(data){
    var inputValue = (<HTMLInputElement>document.getElementById(data)).value;
    let quant:number =  Number(inputValue)-1;
    (<HTMLInputElement>document.getElementById(data)).value =quant.toString()

  }
 
}
