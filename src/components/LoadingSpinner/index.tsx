import React from "react";
import RingLoader from "react-spinners/RingLoader";
import {css} from "@emotion/react";
import styles from './styles.module.scss'
interface LoadingSpinnerProps {
    style?: {[key: string]: string}
}

const LoadingSpinner = ({style}: LoadingSpinnerProps): React.ReactElement => {
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    return (
        <div className={styles.mainWrapper} style={{...style}}>
            <RingLoader css={override} color="var(--ifm-color-primary)"/>
        </div>
    )
}

export default LoadingSpinner;
