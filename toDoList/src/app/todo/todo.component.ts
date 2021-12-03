import { Component } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoOne: string = 'projet 1';
  todoTwo: string = 'projet 2';
  todoThree: string = 'projet 3';
  todoFour: string = 'projet 4';

  isModif = false;

  todos = [
    {
      todoName: 'projet 1',
      todoStatus: true,
      image: 'http://placehold.it/150',
      isModif: false,
    },

    {
      todoName: 'projet 1',
      todoStatus: true,
      image: 'http://placehold.it/150',
      isModif: false,
    },

    {
      todoName: 'projet 2',
      todoStatus: true,
      image: 'http://placehold.it/150',
      isModif: false,
    },

    {
      todoName: 'projet 3',
      todoStatus: true,
      image: 'http://placehold.it/150',
      isModif: false,
    },

    {
      todoName: 'projet 4',
      todoStatus: true,
      image: 'http://placehold.it/150',
      isModif: false,
    },
  ];

  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  onChangeIsModif(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif;
  }
}
