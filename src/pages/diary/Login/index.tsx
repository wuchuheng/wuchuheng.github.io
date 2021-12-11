import React from "react";
import {formatClassName} from "../../../utils/pageUtils";
import styles from "./styles.module.scss";

const Login = (): React.ReactElement => {
    return (
        <div className={formatClassName('container', styles.container)}>
            <div className="row">
                <div className={`card col col--12`}>
                    <div className={`card__header ${styles.header}`}>
                        <h3>Backend for diary management</h3>
                    </div>
                    <div className={formatClassName('card--full-height', 'card__body', 'container', styles.bodyWrapper)}>
                        <input className={`col col--8 col--offset-2 ${styles.input}`}
                               placeholder='username'
                        />
                        <input className={`col col--8 col--offset-2 ${styles.input}`}
                               placeholder='password'
                        />
                    </div>
                    <div className="card__footer container">
                        <button className=" col col--8 col--offset-2 button button--secondary button--block">
                            Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;