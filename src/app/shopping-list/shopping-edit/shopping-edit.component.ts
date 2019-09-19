import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', {static: false})
  nameInput: ElementRef

  @ViewChild('inputAmount', { static: false })
  amountInput: ElementRef

  @ViewChild('inputMeasurement', { static: false })
  measurementInput: ElementRef

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    event.preventDefault();
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const measurement = this.measurementInput.nativeElement.value;
    const newIgredient = new Ingredient(name, amount, measurement);
    this.ingredientAdded.emit(newIgredient)
  }
}
