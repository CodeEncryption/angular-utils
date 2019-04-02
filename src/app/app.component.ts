import { Component } from '@angular/core';
import { Option } from "./utils/score/score.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-utils';
  option:Option={
    num: 7,
    score: 4,
    position: 'end',
    disable: false
  }
  getScore(n){
    console.log(n);
  }
}
