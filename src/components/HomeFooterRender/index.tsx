import React from "react";
import styles from "./styles.module.scss";

const HomeFooterRender = (): React.ReactElement => {
    return (
        <div className={styles.mainWrapper}>
            <p>
                © 2017 - {(new Date).getFullYear()} Wuchuheng. All Rights Reserved. 
            </p>
        </div>
    )
}

export default HomeFooterRender;
