import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpdrachtenComponent } from './opdrachten.component';
import { RaadselComponent } from './raadsel/raadsel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OpdrachtenComponent, RaadselComponent],
  exports: [OpdrachtenComponent, RaadselComponent]
})
export class OpdrachtenModule { }
