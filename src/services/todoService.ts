import graphQLWSClient from "../utils/graphQLWSClient";
import {TodoListType} from "../pages/todos";
import ApolloClient from "../utils/apolloClicent"
import {gql} from "@apollo/client";

type SubscriptionId = number
type SubscriptionCallbackType = (todos: TodoListType) => void
export default class TodoService {
    private static todos: TodoListType = []
    private static isSubscription: boolean = false
    private static callbackList: Map<SubscriptionId, SubscriptionCallbackType> = new Map<SubscriptionId, SubscriptionCallbackType>()
    private static callbackListLastId: SubscriptionId = 0
    private static isInisializeTodo: boolean = false

    constructor() {
        TodoService.isSubscription === false && this.connectSubscription()
    }

    public getTodos():TodoListType {
        TodoService.isInisializeTodo === false && this.initializeTodos()
        return TodoService.todos
    }

    public subscription(callback: (todos: TodoListType) => void): SubscriptionId {
        const newSubscriptionId = TodoService.callbackListLastId + 1;
        TodoService.callbackList.set(newSubscriptionId, callback)
        TodoService.callbackListLastId = newSubscriptionId

        return TodoService.callbackListLastId
    }

    public unsubscription(subscriptionId: SubscriptionId): boolean {
        return TodoService.callbackList.delete(subscriptionId)
    }

    private initializeTodos(): void {
        const TODOS_QUERY = gql`
            query {
                todos {
                    id
                    title
                    done
                    createdAt
                    doneAt
                }
            }
        `
        ApolloClient.query({query: TODOS_QUERY}).then(({data}) => {
            TodoService.todos = data.todos as TodoListType
            this.pushDataByCallback()
            TodoService.isInisializeTodo = true
        })
    }

    private pushDataByCallback(): void {

        TodoService.callbackList.forEach(callback => callback(TodoService.todos))
    }

    private connectSubscription(): void {
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
        if (!TodoService.isSubscription) {
            TodoService.isSubscription = true
            graphQLWSClient().request( { query: TODOS_SUBSCRIPTION})
                .subscribe({
                    next: ({data}) => {
                        if (data) {
                            TodoService.todos = data.todos as TodoListType
                            this.pushDataByCallback()
                        }
                    }
                })
        }
    }
}
