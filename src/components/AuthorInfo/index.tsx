import React from "react";
import styles from "./styles.module.scss"
import { GoMarkGithub, GoMail } from "react-icons/go";
import { ImNpm, ImLink } from "react-icons/im";

const AuthorInfo = () => {

    return (
        <div className={styles.mainWrapper}>
            <h1>Wuchuheng's notes</h1>
            <p>A full-stack developer based in China!</p>
            <div className={styles.buttonLayoutWrapper}>
                <a href="https://github.com/wuchuheng" target="_blank"><button><GoMarkGithub/></button> </a>
                <a href="mailto:root@wuchuheng.com" target="_blank"><button><GoMail/></button> </a>
                <a href="https://www.npmjs.com/~wuchuheng" target="_blank"><button><ImNpm/></button> </a>
                <a href="https://www.npmjs.com/~wuchuheng" target="_blank"><button><ImLink/></button> </a>
            </div>
        </div>
    )

}

export default AuthorInfo