import {Pipe} from "angular2/core";
import {TodoModel} from "../../todo/services/todo-model";

@Pipe({
  name: "started"
})
export class StartedPipe{
  transform(value:Array<TodoModel>, [status]){
    return value.filter((item)=> item.status === status);
  }
}
