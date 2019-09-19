import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  optionLoaded: string = "recipes"

  onNavigation(option){
    this.optionLoaded = option
  }
}
