import {Pipe} from "angular2/core";
import {TodoModel} from "../../todo/services/todo-model";

@Pipe({
  name: "search"
})
export class SearchPipe{
  transform(value:Array<TodoModel>, [term]){
    return value.filter((item)=> item.title.startsWith(term));
  }
}
