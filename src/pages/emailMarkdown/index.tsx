/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/10/12 09:01
 */
import React from "react";
import Layout from "@theme/Layout";
// @ts-ignore
import style from './style.module.scss';
import Tab from "./Tab";

export default (): React.ReactElement => {
    return <>
        <Layout>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                <div>
                    <h1 className={style.h1}>EmailMarkdown</h1>
                    <h3 className={style.h3}>An email-based markdown note</h3>
                    <Tab />
                </div>
            </div>
        </Layout>
    </>
}
