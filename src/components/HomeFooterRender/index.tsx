import React from "react";
import styles from "./styles.module.scss";

const HomeFooterRender = (): React.ReactElement => {
    return (
        <div className={styles.mainWrapper}>
            <p>
                © 2017 - {(new Date).getFullYear()} Wuchuheng. All Rights Reserved. &emsp; <a href="https://beian.miit.gov.cn/">粤ICP备17071471号-2</a>
            </p>
        </div>
    )
}

export default HomeFooterRender;
