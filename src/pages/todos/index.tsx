import React, {useState} from "react";
import styles from "./styles.module.scss";
import { AiOutlineClose } from "react-icons/ai"

const Todos = (): React.ReactElement => {
    const [isShown, setIsShown] = useState(false);


    return <>
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <h2>todos</h2>
                <input className={styles.searchInput} placeholder="Please enter a new todo." />
                <ul>
                    <li className={styles.todoItem}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <p>1</p>
                        {
                           isShown && <AiOutlineClose className={styles.closeIcon}/>
                        }

                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Todos;