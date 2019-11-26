import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
 
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    //if(this.nameInput && this.amountInput){
      const ingName =this.nameInput.nativeElement.value;
      const ingAmount = this.amountInput.nativeElement.value
      const newIngredient = new Ingredient(ingName,ingAmount);
      this.ingredientAdded.emit(newIngredient);
     // console.log(this.nameInput.nativeElement.value);  
      //console.log(this.amountInput.nativeElement.value);  
    //} 
  }
}
