import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';

//pages
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomesComponent } from './pages/homes/homes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
