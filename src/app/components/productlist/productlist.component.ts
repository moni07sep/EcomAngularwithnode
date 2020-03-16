import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder,FormsModule} from '@angular/forms'
import{productService} from '../../shared/services/product.services'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit  {

  constructor(private AR:ActivatedRoute,private productService:productService ,private fg :FormBuilder) { }
  public userForm:FormGroup;
  allcategory:Array<any>=[];
  public categoryId:string;
  public checkedListArray:string
  
  public checkedList:Array<any>=[]
  ngOnInit() {
    //this.checkedListArray="";
    //console.log(this.checkedList);
    this.userForm = this.fg.group({
      search:''
    })

    this.AR.params.subscribe(item=>{
      this.categoryId=item['id'];
    })

    this.productService.fetchallCategory().subscribe(item=>{
      this.allcategory=item
      })
    }

    onCheckboxChange(option, event) {
      
      if(event) {
        //console.log(option._id)
        this.checkedList.push(option._id); 
        //console.log(this.checkedList);
      }else{
        this.checkedList.pop(); 
        //console.log(this.checkedList);
      } 
      this.checkedListArray=this.checkedList.toString()
    }

}
