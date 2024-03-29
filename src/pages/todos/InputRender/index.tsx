import React, {useEffect, useState} from "react";
import styles from "../styles.module.scss";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import {gql, useMutation} from "@apollo/client";

const Index = () => {
    const [title, setTitle] = useState<string>('');
    let handleCreateTodo = () => {}
    if (ExecutionEnvironment.canUseDOM) {
        const CREATE_TODO_MUTATION = gql`
            mutation CREATE_TODO($input: InputCreateTodoInput!){
                createTodo(input: $input) {
                    id
                    title
                    done
                    createdAt
                    doneAt

                }
            }
        `
        const [createTodo, {data, loading, error}] = useMutation(CREATE_TODO_MUTATION, {variables: { input: { title } }})
        handleCreateTodo = createTodo
        useEffect(() => !loading && setTitle(''), [loading])
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && title.trim().length > 0) {
            console.log("commit")
            handleCreateTodo()
        }
    }

    return <input
        value={title}
        type='text'
        onChange={(newTitle) => setTitle(newTitle.target.value)}
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
        placeholder="Please enter a new todo."
    />;
}

export default Index