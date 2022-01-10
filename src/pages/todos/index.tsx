import React, {useCallback, useEffect, useState} from "react";
// @ts-ignore
import styles from "./styles.module.scss";
import {ApolloProvider, gql, useMutation, useQuery} from "@apollo/client"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {setText, todoObservable} from "../../services/todoService";
import apolloClient from "../../utils/apolloClicent";
import TodoItemRender from "./TodoItemRender";
import InputRender from './InputRender';
import debounce from "../../utils/debounce";
import Layout from "@theme/Layout";


export type TodoType = {
    id: number
    title: string
    done: boolean
    createdAt: string
    doneAt: string
};
export type TodoListType = TodoType[];

const Todos = (): React.ReactElement => {
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
    const {data, loading} = useQuery(TODOS_QUERY)
    useEffect(() => !loading && setText(data.todos), [loading])
    let todos: TodoListType = [];
    if (ExecutionEnvironment.canUseDOM) todos = todoObservable()
    const [currentChangeId, setCurrentChangeId] = useState<number>(0)

    return <>
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <h2>todos</h2>
                <InputRender/>
                <ul>
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
    const isLayout = !(document.location.search.substr(1) === "layout=false")
    console.log(document.location.search.substr(1))

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