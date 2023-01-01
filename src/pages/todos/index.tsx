import React, {useEffect, useState} from "react";
// @ts-ignore
import styles from "./styles.module.scss";
import {ApolloProvider} from "@apollo/client"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import TodoService from "../../services/todoService";
import apolloClient from "../../utils/apolloClicent";
import TodoItemRender from "./TodoItemRender";
import InputRender from './InputRender';
import Layout from "@theme/Layout";
import LoadingSpinner from "../../components/LoadingSpinner";


export type TodoType = {
    id: number
    title: string
    done: boolean
    createdAt: string
    doneAt: string
};
export type TodoListType = TodoType[];

const Todos = (): React.ReactElement => {
    const [currentChangeId, setCurrentChangeId] = useState<number>(0)
    const [todos, setTodos] = useState<TodoListType>([])
    if (ExecutionEnvironment.canUseDOM) {
        useEffect(() => {
            const todoService = new TodoService()
            const subscriptionId = todoService.subscription((newTodos) => setTodos(newTodos) )
            setTodos(todoService.getTodos())

            return () => {todoService.unsubscription(subscriptionId)}
        }, [])
    }

    return <>
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <h2>todos</h2>
                <InputRender/>
                <ul>
                    { todos.length === 0 && <LoadingSpinner style={{height: '100%', width: '100%'}} /> }
                    {todos.length > 0 && todos.map(todo => <TodoItemRender
                        todo={todo} key={todo.id}
                        currentChangeId={currentChangeId}
                        onChange={(newChangeId) => setCurrentChangeId(newChangeId) }
                        />) }
                </ul>
            </div>
        </div>
    </>
}

export default (): React.ReactElement => {
    let isLayout = true
    if (ExecutionEnvironment.canUseDOM) isLayout = !(document.location.search.substr(1) === "layout=false")

    return <>
        {
            isLayout &&
            <Layout>
                <ApolloProvider client={apolloClient}>
                    <Todos />
                </ApolloProvider>
            </Layout>
        }
        {
            !isLayout &&
            <ApolloProvider client={apolloClient}>
                <Todos />
            </ApolloProvider>
        }
    </>
}
