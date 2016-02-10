import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

import {SearchBox} from "./search/components/search-box";

import {TodoInput} from "./todo/components/todo-input";
import {TodoList} from "./todo/components/todo-list";
import {StatusSelector} from "./todo/components/status-selector";

import {TodoService} from "./todo/services/todo-service";

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, StatusSelector, SearchBox],
  template: `<div>
    <search-box
      (update)="term = $event">
    </search-box>
    <todo-input></todo-input>
    <status-selector
      (select)="status = $event">
    </status-selector>
    <todo-list
      [status]="status"
      [term]="term">
    </todo-list>
  </div>`
})
class App{}

bootstrap(App, [TodoService]);


// import {bootstrap} from 'angular2/platform/browser';
// import {Component} from 'angular2/core';
// import {HTTP_PROVIDERS, Http} from 'angular2/http';
// import 'rxjs/add/operator/map';
//
// @Component({
//   selector: 'app',
//   template: `
//     <h1>Angular 2 Starter App</h1>
//     <h3>This is working if you see a list of names below</h3>
//     <div *ngFor="#person of people | async">{{person.name.first}} {{person.name.last}}</div>
//   `
// })
// export class App{
//   people;
//   constructor(public http:Http){
//     this.people = http
//       .get('http://localhost:3000/people')
//       .map(res => res.json())
//   }
// }
//
// bootstrap(App, [HTTP_PROVIDERS]);
