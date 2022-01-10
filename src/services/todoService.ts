import graphQLWSClient from "../utils/graphQLWSClient";
import {bind} from "@react-rxjs/core"
import {createSignal} from "@react-rxjs/utils"
import {TodoListType} from "../pages/todos";

export const [textChange$, setText] = createSignal<TodoListType>();
const [useText, text$] = bind<TodoListType>(textChange$, [
    {
        "id":180,
        "title":"开发租车应用的后台服务",
        "done":false,
        "createdAt":"2022-01-07",
        "doneAt": null,
    }

]);

let isTodoObservable = false;
export let demo = false

export const todoObservable = () => {
    const TODOS_SUBSCRIPTION = `
        subscription {
          todos{
            id
            title
            done
            doneAt
            createdAt
          }
        }
    `
    if (!isTodoObservable) {
        isTodoObservable = true
        graphQLWSClient().request( { query: TODOS_SUBSCRIPTION})
            .subscribe({
                next: ({data}) => {
                    data && setText(data.todos as TodoListType)
                }
            })
    }

    return useText()
}



