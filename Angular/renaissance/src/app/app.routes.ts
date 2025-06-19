import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [{path:"student", component:StudentComponent},{path:"item-list", component:ItemListComponent}];
