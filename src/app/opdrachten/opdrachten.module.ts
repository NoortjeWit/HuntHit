import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpdrachtenComponent } from './opdrachten.component';
import { RaadselComponent } from './raadsel/raadsel.component';
import { RaadselListComponent } from './raadsel-list/raadsel-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OpdrachtenComponent, RaadselComponent, RaadselListComponent],
  exports: [OpdrachtenComponent, RaadselComponent, RaadselListComponent]
})
export class OpdrachtenModule { }
