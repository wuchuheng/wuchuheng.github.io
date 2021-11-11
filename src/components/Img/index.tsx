/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import styles from './styles.module.css'

interface Props {
    children: React.ReactNode;
    src: string;
    alt?: string;
    align?: "center"
}

function Img({src:url, alt, align}: Props): JSX.Element {
    const hasUrl = url.match('https?://[^\\.]+\\.[^\\.]+')
    const prefix = "//qiniu.wuchuheng.com"
    const props = {
        ...(alt ? {alt} : {}),
    }
    const column = <img
            src={hasUrl ? url : `${prefix}${url}`}
            {...props} />;

    const layoutRender = (
        <div className={styles.layoutWrapper}>
            {column}
        </div>
    );

    return align === 'center' ? layoutRender : column;
}

export default Img;