import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ScoreComponent
  ],
  declarations: [
    ScoreComponent
  ]
})
export class UtilsModule { }
