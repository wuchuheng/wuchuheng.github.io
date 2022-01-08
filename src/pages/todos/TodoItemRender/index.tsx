import React, {useEffect, useState} from "react";
// @ts-ignore
import styles from './styles.module.scss';
import {TodoType} from "../index";
import {gql, useMutation} from "@apollo/client"
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import debounce from "../../../utils/debounce";

type TodoItemRenderPropType = {
    todo: TodoType
    onChange?: (id: number) => void
    currentChangeId: number
}

const clickTimeOut = 500;
const TodoItemRender = ({todo, onChange, currentChangeId}: TodoItemRenderPropType): React.ReactElement => {
    const [isShown, setIsShown] = useState(false);
    const UPDATE_TODO_MUTATION = gql`
        mutation  UPDATE_TODO($input: InputUpdateTodoInput!){
            updateTodo(input:$input) {
                id
                done
                title
            }
        }
    `
    let handleRemove = () => {}
    if (ExecutionEnvironment.canUseDOM) {
        const [updateTodo, {data, loading, error}] = useMutation(UPDATE_TODO_MUTATION)
        handleRemove = () => {
            updateTodo(
                {
                    variables: {
                        input: {
                            id: todo.id,
                            done: true
                        }
                    }
                }
            )
        }
    }
    const [lastClickTime, setLastClickTime] = useState<number>((Date.now() + 1000))
    const [isInputModel, setIsInputModel] = useState<boolean>(false)
    const handleClickTitle = () => {
        if (Date.now() < clickTimeOut + lastClickTime) {
            setIsInputModel(true)
            setIsShown(false)
            onChange && onChange(todo.id)
        } else {
            setLastClickTime(Date.now())
        }
    }

    const [title, setTitle] = useState<string>('')
    useEffect(() => todo?.title && setTitle(todo?.title) , [todo?.title])
    useEffect(
        () => currentChangeId != todo.id && isInputModel && setIsInputModel(false),
        [currentChangeId]
    )

    let updateHandler: () => void
    if (ExecutionEnvironment.canUseDOM) {
        const UPDATE_TODO_MUTATION = gql`
            mutation  UPDATE_TODO($input: InputUpdateTodoInput!){
                updateTodo(input:$input) {
                    id
                    done
                    title
                }
            }
        `
        const [graphqlUpdateHandler, { updateLoading}] = useMutation(UPDATE_TODO_MUTATION, {
            variables: {
                input: {
                    id: todo?.id,
                    title: title
                }
            }
        })
        updateHandler = graphqlUpdateHandler
        useEffect(() => !updateLoading && console.log("Updated successful"), [updateLoading])
        const debounceHandle = debounce(() => updateHandler(), 1000)
        useEffect(() => {
            if (title != todo?.title && title ) {
                debounceHandle()
            }
        }, [title])
    }
    return (
        <li
            key={todo?.id}
            className={styles.todoItem}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className={styles.titleRender}>
                {todo?.id}&emsp;
                { !isInputModel && <span onClick={handleClickTitle} >{todo?.title} </span> }
                { isInputModel && <input
                    autoFocus
                    className={styles.editInput}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />}
            </div>
            { isShown && <div className={styles.closeIcon} onClick={handleRemove}>X</div> }
        </li>
    )
}


export default TodoItemRender;