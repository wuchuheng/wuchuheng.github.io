import React from 'react'
import Layout from '@theme/Layout'
import BrowserOnly from '@docusaurus/BrowserOnly';
import DiaryIcon from "../../components/icons/DiaryIcon"
import Login from "./Login";

function Diary() {
    return (
        <Layout title="Diary">
            <BrowserOnly >
                {() => {
                    return <Login />
                }}
            </BrowserOnly>
        </Layout>
    )
}

export default Diary;
