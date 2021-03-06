import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  optionSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(option: string){
    this.optionSelected.emit(option)
  }
}
