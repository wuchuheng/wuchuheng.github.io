import React from "react";

import styles from "./styles.module.scss";

interface Props {
    children: React.ReactNode;
}
const Index = ({children}: Props): React.ReactElement => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Index;