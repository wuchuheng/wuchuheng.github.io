/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {memo, ReactNode, useCallback} from 'react';
import {MdContentCopy} from 'react-icons/Md'
import {FiCodesandbox} from 'react-icons/Fi'
import styles from './styles.module.scss';
import MessageRender from "../MessageRender";
import {copyStringToClipboard} from "@wuchuhengtools/helper"
import {AiOutlineArrowRight} from 'react-icons/Ai'

interface Props {
    children: ReactNode;
    minHeight: number;
    url: string;
    codesandboxUrl?: string;
    isJump?: boolean
}

function BrowserWindow({children, minHeight, url, codesandboxUrl, isJump}: Props): JSX.Element {
    const handleNavigateUrl = () => window.open(codesandboxUrl, '_blank').focus()
    const handleJumpUrl = () => window.open(url, '_blank').focus()
    const [showMessage, setShowMessage] = React.useState(false);

    const handleCopy = () => {
        setShowMessage(true)
        copyStringToClipboard(url)
    }
    const handleCloseMessage = useCallback((isClose: boolean) => {
        setShowMessage(isClose)
    }, []);

    return (
        <>
            <div className={styles.browserWindow} style={{minHeight}}>
                <div className={styles.browserWindowHeader}>
                    <div className={styles.buttons}>
                        <span className={styles.dot} style={{background: '#f25f58'}} />
                        <span className={styles.dot} style={{background: '#fbbe3c'}} />
                        <span className={styles.dot} style={{background: '#58cb42'}} />
                    </div>
                    <div className={styles.browserWindowAddressBar}>{url}</div>
                    <div className={styles.browserWindowMenuIcon}>
                        <div className={styles.iconWrapper}>
                            { isJump && <AiOutlineArrowRight className={styles.iconRender} onClick={handleJumpUrl}/>}
                            { codesandboxUrl &&
                                <>
                                    <FiCodesandbox className={styles.iconRender} onClick={handleNavigateUrl}/>
                                    <MdContentCopy className={styles.iconRender} onClick={handleCopy}/>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.browserWindowBody}>{children}</div>
            </div>
            <MessageRender open={showMessage} onClose={handleCloseMessage}/>
        </>
    );
}

export default BrowserWindow
