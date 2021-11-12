import React from "react";
import type {HomeContainerProps} from "./index.d";
// @ts-ignore
import styles from "./styles.module.scss"

const Index = ({children}: HomeContainerProps): React.ReactElement => {

    return (
        <main className={styles.mainWraper}>
            <div className={styles.manRender}>
                {children}
            </div>
        </main>
    )

}

export default Index
