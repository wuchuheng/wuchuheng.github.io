import React, {useEffect, useState} from "react";
import Layout from "@theme/Layout";
import UnderConstruction from "../../components/icons/UnderConstruction/UnderConstruction"
import styles from "./styles.module.scss"

const Books = (): React.ReactElement => {
    const [pointNumber, setPointNumber] = useState<number>(0)
    useEffect(() => {
        const setTimeHandler = setTimeout(() => {
            setPointNumber((oldPointNumber) => (oldPointNumber + 1) % 4)
        }, 1000)

        return () => clearTimeout(setTimeHandler)
    }, [pointNumber])

    return <Layout>
        <div className={styles.mainWrapper}>
            <UnderConstruction width={200} />
            <p>Under developing
                {Array.from(Array(pointNumber), (e, i) => <span key={`pointRenderNode${i}`}>.</span> )}
                {Array.from(Array(4 - pointNumber), (e, i) => <span className={styles.fillPointRender} key={`pointFillNode${i}`}>.</span> )}
            </p>
        </div>
    </Layout>
}

export default Books;